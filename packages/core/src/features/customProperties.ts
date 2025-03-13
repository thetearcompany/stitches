import type { Properties } from 'csstype'

export type CustomPropertyValue = string | number | null

export interface CustomProperties {
  [key: string]: CustomPropertyValue | CustomProperties
}

export interface CustomPropertyConfig {
  prefix?: string
  scope?: string
  properties: CustomProperties
}

export class CustomPropertyManager {
  private prefix: string
  private scope: string
  private properties: CustomProperties

  constructor(config: CustomPropertyConfig) {
    this.prefix = config.prefix || ''
    this.scope = config.scope || ':root'
    this.properties = config.properties
  }

  private formatPropertyName(name: string): string {
    return `--${this.prefix}${name}`
  }

  private formatPropertyValue(value: CustomPropertyValue): string {
    if (value === null) return 'initial'
    return String(value)
  }

  private processProperties(
    properties: CustomProperties,
    parentKey: string = ''
  ): { [key: string]: string } {
    const result: { [key: string]: string } = {}

    Object.entries(properties).forEach(([key, value]) => {
      const fullKey = parentKey ? `${parentKey}-${key}` : key

      if (value !== null && typeof value === 'object') {
        Object.assign(result, this.processProperties(value, fullKey))
      } else {
        result[this.formatPropertyName(fullKey)] = this.formatPropertyValue(value)
      }
    })

    return result
  }

  public createCustomProperties(): string {
    const processedProperties = this.processProperties(this.properties)
    let cssString = `${this.scope} {`

    Object.entries(processedProperties).forEach(([prop, value]) => {
      cssString += `${prop}: ${value};`
    })

    cssString += '}'
    return cssString
  }

  public getPropertyValue(name: string): string {
    return `var(${this.formatPropertyName(name)})`
  }

  public updateProperties(newProperties: CustomProperties): void {
    this.properties = { ...this.properties, ...newProperties }
  }

  public setProperty(name: string, value: CustomPropertyValue): void {
    const parts = name.split('-')
    let current = this.properties

    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i]
      if (!(part in current) || typeof current[part] !== 'object') {
        current[part] = {}
      }
      current = current[part] as CustomProperties
    }

    const lastPart = parts[parts.length - 1]
    current[lastPart] = value
  }
}

// Example usage:
/*
const customProps = new CustomPropertyManager({
  prefix: 'theme-',
  scope: ':root',
  properties: {
    colors: {
      primary: '#3b82f6',
      secondary: '#10b981',
      background: {
        light: '#ffffff',
        dark: '#1a1a1a'
      }
    },
    spacing: {
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem'
    },
    typography: {
      fontFamily: {
        sans: 'system-ui, -apple-system, sans-serif',
        mono: 'ui-monospace, monospace'
      },
      fontSize: {
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
      }
    }
  }
})

const styles = customProps.createCustomProperties()
const primaryColor = customProps.getPropertyValue('colors-primary')
*/ 