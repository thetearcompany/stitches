import type { Properties } from 'csstype'

export interface GridArea {
  name: string
  startColumn: number | string
  endColumn?: number | string
  startRow: number | string
  endRow?: number | string
  subgrid?: boolean
}

export interface BentoGridItem {
  area: string
  content?: Properties
  hover?: Properties
  animation?: string
}

export interface BentoGridConfig {
  columns?: number | string
  rows?: number | string
  gap?: string
  areas: GridArea[]
  items: BentoGridItem[]
  containerStyles?: Properties
  defaultItemStyles?: Properties
}

export class GridManager {
  private config: BentoGridConfig

  constructor(config: BentoGridConfig) {
    this.config = {
      columns: 4,
      rows: 3,
      gap: '1rem',
      ...config
    }
  }

  private createGridTemplate(): string {
    const areas = this.config.areas
    const maxRow = Math.max(...areas.map(area => 
      typeof area.endRow === 'number' ? area.endRow : parseInt(area.endRow || area.startRow.toString())
    ))

    let template = ''
    for (let row = 1; row <= maxRow; row++) {
      template += '"'
      for (let col = 1; col <= (typeof this.config.columns === 'number' ? this.config.columns : 4); col++) {
        const area = this.config.areas.find(a => 
          this.isInArea(row, col, a)
        )
        template += area ? area.name : '.'
        template += ' '
      }
      template = template.trim() + '"\n'
    }
    return template.trim()
  }

  private isInArea(row: number, col: number, area: GridArea): boolean {
    const startCol = typeof area.startColumn === 'number' ? area.startColumn : parseInt(area.startColumn)
    const endCol = area.endColumn ? (typeof area.endColumn === 'number' ? area.endColumn : parseInt(area.endColumn)) : startCol
    const startRow = typeof area.startRow === 'number' ? area.startRow : parseInt(area.startRow)
    const endRow = area.endRow ? (typeof area.endRow === 'number' ? area.endRow : parseInt(area.endRow)) : startRow

    return col >= startCol && col <= endCol && row >= startRow && row <= endRow
  }

  public createBentoGrid(): string {
    let cssString = '.bento-grid {'
    
    // Container styles
    cssString += `
      display: grid;
      grid-template-areas: ${this.createGridTemplate()};
      grid-template-columns: repeat(${this.config.columns}, minmax(0, 1fr));
      gap: ${this.config.gap};
      ${this.config.containerStyles ? Object.entries(this.config.containerStyles)
        .map(([prop, value]) => `${prop}: ${value};`).join('\n') : ''}
    `
    cssString += '}\n'

    // Default item styles
    if (this.config.defaultItemStyles) {
      cssString += '.bento-grid > * {'
      Object.entries(this.config.defaultItemStyles).forEach(([prop, value]) => {
        cssString += `${prop}: ${value};`
      })
      cssString += '}\n'
    }

    // Individual items
    this.config.items.forEach(item => {
      cssString += `.bento-grid-item-${item.area} {
        grid-area: ${item.area};
        ${item.content ? Object.entries(item.content)
          .map(([prop, value]) => `${prop}: ${value};`).join('\n') : ''}
      }\n`

      if (item.hover) {
        cssString += `.bento-grid-item-${item.area}:hover {
          ${Object.entries(item.hover)
            .map(([prop, value]) => `${prop}: ${value};`).join('\n')}
        }\n`
      }

      if (item.animation) {
        cssString += `.bento-grid-item-${item.area} {
          animation: ${item.animation};
        }\n`
      }
    })

    // Subgrid support
    this.config.areas
      .filter(area => area.subgrid)
      .forEach(area => {
        cssString += `.bento-grid-item-${area.name} {
          display: grid;
          grid: subgrid;
        }\n`
      })

    return cssString
  }

  public updateArea(name: string, updates: Partial<GridArea>): void {
    const areaIndex = this.config.areas.findIndex(a => a.name === name)
    if (areaIndex !== -1) {
      this.config.areas[areaIndex] = { ...this.config.areas[areaIndex], ...updates }
    }
  }

  public updateItem(area: string, updates: Partial<BentoGridItem>): void {
    const itemIndex = this.config.items.findIndex(i => i.area === area)
    if (itemIndex !== -1) {
      this.config.items[itemIndex] = { ...this.config.items[itemIndex], ...updates }
    }
  }
}

// Example usage:
/*
const bentoGrid = new GridManager({
  columns: 4,
  rows: 3,
  gap: '1rem',
  areas: [
    { name: 'featured', startColumn: 1, endColumn: 2, startRow: 1, endRow: 2 },
    { name: 'main', startColumn: 2, endColumn: 4, startRow: 1, endRow: 1 },
    { name: 'sidebar', startColumn: 4, startRow: 1, endRow: 3, subgrid: true },
    { name: 'content1', startColumn: 1, startRow: 2 },
    { name: 'content2', startColumn: 2, startRow: 2 },
    { name: 'content3', startColumn: 3, startRow: 2 }
  ],
  items: [
    {
      area: 'featured',
      content: {
        backgroundColor: 'var(--featured-bg)',
        borderRadius: '1rem',
        padding: '2rem'
      },
      hover: {
        transform: 'scale(1.02)',
        transition: 'transform 0.2s ease-in-out'
      }
    },
    {
      area: 'main',
      content: {
        backgroundColor: 'var(--main-bg)',
        borderRadius: '1rem'
      },
      animation: 'fadeIn 0.3s ease-in-out'
    },
    {
      area: 'sidebar',
      content: {
        display: 'grid',
        gap: '1rem',
        gridTemplateRows: 'repeat(auto-fill, minmax(100px, 1fr))'
      }
    }
  ],
  containerStyles: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem'
  },
  defaultItemStyles: {
    borderRadius: '0.5rem',
    transition: 'all 0.2s ease-in-out'
  }
})

const styles = bentoGrid.createBentoGrid()
*/ 