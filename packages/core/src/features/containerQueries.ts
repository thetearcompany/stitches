import type { Properties } from 'csstype'

export interface ContainerQueryRule {
  name?: string
  size?: string
  type?: 'inline-size' | 'size'
  conditions: {
    [key: string]: Properties
  }
}

export class ContainerQueryManager {
  private queries: Map<string, ContainerQueryRule> = new Map()

  constructor(initialQueries?: ContainerQueryRule[]) {
    if (initialQueries) {
      initialQueries.forEach(query => this.addQuery(query))
    }
  }

  public addQuery(rule: ContainerQueryRule): void {
    const name = rule.name || `container-${this.queries.size + 1}`
    this.queries.set(name, rule)
  }

  public createContainerQuery(rule: ContainerQueryRule): string {
    const containerType = rule.type || 'inline-size'
    const containerName = rule.name ? `${rule.name}/` : ''
    const containerSize = rule.size || 'size'

    let cssString = ''

    if (rule.name) {
      cssString += `container-name: ${rule.name};`
    }
    
    cssString += `container-type: ${containerType};`

    Object.entries(rule.conditions).forEach(([query, styles]) => {
      cssString += `@container ${containerName} ${query} {`
      
      Object.entries(styles).forEach(([prop, value]) => {
        cssString += `${prop}: ${value};`
      })
      
      cssString += '}'
    })

    return cssString
  }

  public createAllContainerQueries(): string {
    let cssString = ''
    this.queries.forEach(query => {
      cssString += this.createContainerQuery(query)
    })
    return cssString
  }

  public removeQuery(name: string): void {
    this.queries.delete(name)
  }

  public getQuery(name: string): ContainerQueryRule | undefined {
    return this.queries.get(name)
  }

  public updateQuery(name: string, newRule: Partial<ContainerQueryRule>): void {
    const existingRule = this.queries.get(name)
    if (existingRule) {
      this.queries.set(name, { ...existingRule, ...newRule })
    }
  }
}

// Example usage:
/*
const containerQueries = new ContainerQueryManager([
  {
    name: 'sidebar',
    type: 'inline-size',
    conditions: {
      '(min-width: 400px)': {
        fontSize: '16px',
        padding: '1rem'
      },
      '(min-width: 800px)': {
        fontSize: '18px',
        padding: '2rem'
      }
    }
  }
])

const styles = containerQueries.createAllContainerQueries()
*/ 