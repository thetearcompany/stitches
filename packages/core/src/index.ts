export * from './features/config'
export * from './features/containerQueries'
export * from './features/cssNesting'
export * from './features/darkMode'
export * from './features/animation'
export * from './features/cssLayers'
export * from './features/customProperties'
export * from './features/grid'
export * from './features/gridTemplates'

// Re-export existing functionality
export * from './createStitches'
export * from './sheet'
export * from './ThemeToken'

// Export version information
export const VERSION = '2.0.0'

// Export type information
export type {
  Properties,
  StandardProperties,
  VendorProperties,
  SvgProperties
} from 'csstype'

// Export managers as named exports
export { AnimationManager } from './features/animation'
export { ContainerQueryManager } from './features/containerQueries'
export { DarkModeManager } from './features/darkMode'
export { LayerManager } from './features/cssLayers'
export { CustomPropertyManager } from './features/customProperties'
export { GridManager } from './features/grid'
export { bentoTemplates, createBentoVariant } from './features/gridTemplates' 