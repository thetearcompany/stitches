import type { Properties } from 'csstype'

export interface DarkModeConfig {
  defaultMode?: 'light' | 'dark' | 'system'
  attribute?: string
  className?: string
  storage?: {
    key: string
    provider?: Storage
  }
}

export interface DarkModeStyles {
  light?: Properties
  dark?: Properties
}

const defaultConfig: DarkModeConfig = {
  defaultMode: 'system',
  attribute: 'data-theme',
  className: 'theme',
  storage: {
    key: 'stitches-theme',
    provider: typeof window !== 'undefined' ? window.localStorage : undefined
  }
}

export class DarkModeManager {
  private config: DarkModeConfig
  private mediaQuery: MediaQueryList | null = null

  constructor(config: Partial<DarkModeConfig> = {}) {
    this.config = { ...defaultConfig, ...config }
    
    if (typeof window !== 'undefined') {
      this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      this.mediaQuery.addEventListener('change', this.handleSystemPreferenceChange)
      
      // Initialize theme
      const savedTheme = this.getSavedTheme()
      if (savedTheme) {
        this.setTheme(savedTheme as 'light' | 'dark' | 'system')
      } else {
        this.setTheme(this.config.defaultMode || 'system')
      }
    }
  }

  private handleSystemPreferenceChange = (e: MediaQueryListEvent) => {
    if (this.getTheme() === 'system') {
      this.applyTheme(e.matches ? 'dark' : 'light')
    }
  }

  private getSavedTheme(): string | null {
    if (!this.config.storage?.provider) return null
    return this.config.storage.provider.getItem(this.config.storage.key)
  }

  private saveTheme(theme: string): void {
    if (!this.config.storage?.provider) return
    this.config.storage.provider.setItem(this.config.storage.key, theme)
  }

  public getTheme(): 'light' | 'dark' | 'system' {
    const saved = this.getSavedTheme()
    return (saved as 'light' | 'dark' | 'system') || this.config.defaultMode || 'system'
  }

  public setTheme(theme: 'light' | 'dark' | 'system'): void {
    this.saveTheme(theme)
    
    if (theme === 'system') {
      const isDark = this.mediaQuery?.matches
      this.applyTheme(isDark ? 'dark' : 'light')
    } else {
      this.applyTheme(theme)
    }
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    if (typeof document === 'undefined') return

    const root = document.documentElement
    const attribute = this.config.attribute
    const className = this.config.className

    if (attribute) {
      root.setAttribute(attribute, theme)
    }

    if (className) {
      root.classList.remove(`${className}-light`, `${className}-dark`)
      root.classList.add(`${className}-${theme}`)
    }
  }

  public createStyles(styles: DarkModeStyles): string {
    let cssString = ''

    if (styles.light && this.config.attribute) {
      cssString += `[${this.config.attribute}="light"] & {`
      Object.entries(styles.light).forEach(([prop, value]) => {
        cssString += `${prop}: ${value};`
      })
      cssString += '}'
    }

    if (styles.dark && this.config.attribute) {
      cssString += `[${this.config.attribute}="dark"] & {`
      Object.entries(styles.dark).forEach(([prop, value]) => {
        cssString += `${prop}: ${value};`
      })
      cssString += '}'
    }

    return cssString
  }
}

// Example usage:
/*
const darkMode = new DarkModeManager({
  defaultMode: 'system',
  attribute: 'data-theme',
  className: 'theme',
  storage: {
    key: 'my-app-theme'
  }
})

const styles = darkMode.createStyles({
  light: {
    backgroundColor: 'white',
    color: 'black'
  },
  dark: {
    backgroundColor: '#1a1a1a',
    color: 'white'
  }
})
*/ 