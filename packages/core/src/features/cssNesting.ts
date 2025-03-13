import type { Properties } from 'csstype'

export interface NestedStyles {
  [key: string]: Properties | NestedStyles
}

export const createNestedStyles = (styles: NestedStyles, parentSelector: string = ''): string => {
  let cssString = ''

  Object.entries(styles).forEach(([selector, value]) => {
    const isProperties = !Object.values(value).some(v => typeof v === 'object')
    const fullSelector = parentSelector ? `${parentSelector} ${selector}` : selector

    if (isProperties) {
      cssString += `${fullSelector} {`
      Object.entries(value as Properties).forEach(([prop, propValue]) => {
        cssString += `${prop}: ${propValue};`
      })
      cssString += '}'
    } else {
      cssString += createNestedStyles(value as NestedStyles, fullSelector)
    }
  })

  return cssString
}

export const nested = (styles: NestedStyles) => {
  return createNestedStyles(styles)
}

// Example usage:
/*
const styles = nested({
  '.card': {
    padding: '1rem',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'gray',
      '.title': {
        color: 'white'
      }
    },
    '.title': {
      fontSize: '1.5rem',
      color: 'black'
    }
  }
})
*/ 