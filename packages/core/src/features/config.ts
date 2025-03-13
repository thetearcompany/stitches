import type { Properties } from 'csstype'

export interface AdvancedFeatureConfig {
  containerQueries?: boolean
  cssNesting?: boolean
  customProperties?: boolean
  subgrid?: boolean
  cssLayers?: boolean
}

export interface ResponsiveConfig {
  breakpoints: {
    [key: string]: string
  }
  defaultBreakpoint?: string
}

export interface ColorSchemeConfig {
  defaultScheme?: 'light' | 'dark' | 'system'
  transitions?: boolean
}

export interface StitchesAnimationConfig {
  durations?: {
    [key: string]: string
  }
  easings?: {
    [key: string]: string
  }
  keyframes?: {
    [key: string]: Keyframe[]
  }
}

export interface StitchesAdvancedConfig {
  features?: AdvancedFeatureConfig
  responsive?: ResponsiveConfig
  colorScheme?: ColorSchemeConfig
  animation?: StitchesAnimationConfig
  utils?: {
    [key: string]: (value: any) => Properties
  }
}

export const defaultConfig: StitchesAdvancedConfig = {
  features: {
    containerQueries: true,
    cssNesting: true,
    customProperties: true,
    subgrid: true,
    cssLayers: true
  },
  responsive: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  colorScheme: {
    defaultScheme: 'system',
    transitions: true
  },
  animation: {
    durations: {
      fast: '150ms',
      normal: '300ms',
      slow: '450ms'
    },
    easings: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
} 