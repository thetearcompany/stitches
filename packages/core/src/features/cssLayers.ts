import type { Properties } from 'csstype'

export interface LayerStyles {
  [key: string]: Properties
}

export interface LayerConfig {
  name: string
  order?: string[]
  styles: LayerStyles
}

export class LayerManager {
  private layers: Map<string, LayerStyles> = new Map()
  private layerOrder: string[] = []

  constructor(initialLayers?: LayerConfig[]) {
    if (initialLayers) {
      initialLayers.forEach(layer => this.addLayer(layer))
    }
  }

  public addLayer(config: LayerConfig): void {
    this.layers.set(config.name, config.styles)
    
    if (config.order) {
      this.layerOrder = config.order
    } else if (!this.layerOrder.includes(config.name)) {
      this.layerOrder.push(config.name)
    }
  }

  public createLayerStyles(): string {
    let cssString = ''

    // Declare layer order if specified
    if (this.layerOrder.length > 0) {
      cssString += `@layer ${this.layerOrder.join(', ')};`
    }

    // Generate styles for each layer
    this.layerOrder.forEach(layerName => {
      const styles = this.layers.get(layerName)
      if (styles) {
        cssString += `@layer ${layerName} {`
        Object.entries(styles).forEach(([selector, properties]) => {
          cssString += `${selector} {`
          Object.entries(properties).forEach(([prop, value]) => {
            cssString += `${prop}: ${value};`
          })
          cssString += '}'
        })
        cssString += '}'
      }
    })

    return cssString
  }

  public getLayerOrder(): string[] {
    return [...this.layerOrder]
  }

  public removeLayer(name: string): void {
    this.layers.delete(name)
    this.layerOrder = this.layerOrder.filter(layer => layer !== name)
  }

  public updateLayerOrder(newOrder: string[]): void {
    // Validate that all layers in newOrder exist
    if (newOrder.some(layer => !this.layers.has(layer))) {
      throw new Error('Cannot update layer order: some layers do not exist')
    }
    this.layerOrder = newOrder
  }
}

// Example usage:
/*
const layerManager = new LayerManager([
  {
    name: 'reset',
    order: ['reset', 'base', 'components', 'utilities'],
    styles: {
      '*': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box'
      }
    }
  },
  {
    name: 'base',
    styles: {
      'body': {
        fontFamily: 'system-ui',
        lineHeight: '1.5'
      }
    }
  },
  {
    name: 'components',
    styles: {
      '.button': {
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem'
      }
    }
  },
  {
    name: 'utilities',
    styles: {
      '.mt-4': {
        marginTop: '1rem'
      }
    }
  }
])

const styles = layerManager.createLayerStyles()
*/ 