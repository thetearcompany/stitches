import type { BentoGridConfig } from './grid'

// Style glassmorphism dla elementów
const glassStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
}

const hoverGlassStyles = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(15px)',
  transform: 'translateY(-2px)',
  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.15)'
}

export const bentoTemplates: { [key: string]: BentoGridConfig } = {
  // Nowoczesny układ Bento z efektem szkła
  modern: {
    columns: 4,
    rows: 3,
    gap: '1.5rem',
    areas: [
      { name: 'featured', startColumn: 1, endColumn: 3, startRow: 1, endRow: 2 },
      { name: 'secondary1', startColumn: 3, startRow: 1 },
      { name: 'secondary2', startColumn: 4, startRow: 1 },
      { name: 'content1', startColumn: 1, startRow: 2 },
      { name: 'content2', startColumn: 2, startRow: 2 },
      { name: 'content3', startColumn: 3, startRow: 2 },
      { name: 'content4', startColumn: 4, startRow: 2 }
    ],
    items: [
      {
        area: 'featured',
        content: {
          ...glassStyles,
          padding: '2rem',
          borderRadius: '1.5rem'
        },
        hover: {
          ...hoverGlassStyles,
          transition: 'all 0.3s ease-in-out'
        }
      }
    ],
    defaultItemStyles: {
      ...glassStyles,
      borderRadius: '1rem',
      padding: '1.5rem',
      transition: 'all 0.3s ease-in-out'
    },
    containerStyles: {
      position: 'relative',
      padding: '2rem',
      background: 'linear-gradient(135deg, var(--gradient-start, rgba(74, 222, 128, 0.1)), var(--gradient-end, rgba(59, 130, 246, 0.1)))',
      borderRadius: '2rem'
    }
  },

  // Klasyczny układ Bento z wyróżnionym elementem
  classic: {
    columns: 4,
    rows: 3,
    gap: '1rem',
    areas: [
      { name: 'featured', startColumn: 1, endColumn: 3, startRow: 1, endRow: 2 },
      { name: 'secondary1', startColumn: 3, startRow: 1 },
      { name: 'secondary2', startColumn: 4, startRow: 1 },
      { name: 'content1', startColumn: 1, startRow: 2 },
      { name: 'content2', startColumn: 2, startRow: 2 },
      { name: 'content3', startColumn: 3, startRow: 2 },
      { name: 'content4', startColumn: 4, startRow: 2 }
    ],
    items: [
      {
        area: 'featured',
        content: {
          ...glassStyles,
          padding: '2rem',
          borderRadius: '1rem'
        },
        hover: {
          ...hoverGlassStyles
        }
      }
    ],
    defaultItemStyles: {
      ...glassStyles,
      borderRadius: '0.5rem',
      padding: '1rem',
      transition: 'all 0.2s ease-in-out'
    }
  },

  // Układ magazynowy z dużym nagłówkiem
  magazine: {
    columns: 3,
    rows: 4,
    gap: '1.5rem',
    areas: [
      { name: 'header', startColumn: 1, endColumn: 3, startRow: 1 },
      { name: 'sidebar', startColumn: 3, startRow: 1, endRow: 4 },
      { name: 'main', startColumn: 1, endColumn: 3, startRow: 2, endRow: 3 },
      { name: 'footer1', startColumn: 1, startRow: 3 },
      { name: 'footer2', startColumn: 2, startRow: 3 }
    ],
    items: [
      {
        area: 'header',
        content: {
          ...glassStyles,
          fontSize: 'var(--header-font-size, 2rem)',
          fontWeight: 'bold',
          padding: '2rem',
          borderRadius: '1.5rem'
        },
        hover: {
          ...hoverGlassStyles
        }
      },
      {
        area: 'sidebar',
        content: {
          ...glassStyles,
          display: 'grid',
          gap: '1rem',
          gridTemplateRows: 'repeat(auto-fill, minmax(100px, 1fr))',
          borderRadius: '1.5rem',
          padding: '1.5rem'
        }
      }
    ],
    defaultItemStyles: {
      ...glassStyles,
      borderRadius: '1rem',
      transition: 'all 0.3s ease-in-out'
    }
  },

  // Układ portfolio/galeria
  portfolio: {
    columns: 4,
    rows: 3,
    gap: '2rem',
    areas: [
      { name: 'project1', startColumn: 1, endColumn: 3, startRow: 1 },
      { name: 'project2', startColumn: 3, endColumn: 5, startRow: 1 },
      { name: 'project3', startColumn: 1, endColumn: 2, startRow: 2 },
      { name: 'project4', startColumn: 2, endColumn: 4, startRow: 2 },
      { name: 'project5', startColumn: 4, startRow: 2 },
      { name: 'project6', startColumn: 1, endColumn: 3, startRow: 3 },
      { name: 'project7', startColumn: 3, endColumn: 5, startRow: 3 }
    ],
    items: [
      {
        area: 'project1',
        content: {
          ...glassStyles,
          aspectRatio: '16/9',
          objectFit: 'cover',
          overflow: 'hidden',
          borderRadius: '1.5rem'
        },
        hover: {
          ...hoverGlassStyles,
          transform: 'translateY(-4px)'
        }
      }
    ],
    defaultItemStyles: {
      ...glassStyles,
      borderRadius: '1rem',
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out'
    }
  },

  // Układ dashboard
  dashboard: {
    columns: 6,
    rows: 4,
    gap: '1rem',
    areas: [
      { name: 'header', startColumn: 1, endColumn: 7, startRow: 1 },
      { name: 'sidebar', startColumn: 1, startRow: 2, endRow: 5 },
      { name: 'main', startColumn: 2, endColumn: 5, startRow: 2, endRow: 4 },
      { name: 'widget1', startColumn: 5, startRow: 2 },
      { name: 'widget2', startColumn: 6, startRow: 2 },
      { name: 'widget3', startColumn: 5, startRow: 3 },
      { name: 'widget4', startColumn: 6, startRow: 3 },
      { name: 'footer', startColumn: 2, endColumn: 7, startRow: 4 }
    ],
    items: [
      {
        area: 'main',
        content: {
          ...glassStyles,
          padding: '2rem',
          borderRadius: '1.5rem'
        }
      },
      {
        area: 'sidebar',
        content: {
          ...glassStyles,
          padding: '1.5rem',
          borderRadius: '1.5rem'
        }
      }
    ],
    defaultItemStyles: {
      ...glassStyles,
      borderRadius: '1rem',
      padding: '1rem',
      transition: 'all 0.3s ease-in-out'
    }
  }
}

// Helper do tworzenia własnych wariantów szablonów
export const createBentoVariant = (
  baseName: keyof typeof bentoTemplates,
  overrides: Partial<BentoGridConfig>
): BentoGridConfig => {
  const baseTemplate = bentoTemplates[baseName]
  return {
    ...baseTemplate,
    ...overrides,
    items: [
      ...(baseTemplate.items || []),
      ...(overrides.items || [])
    ],
    areas: [
      ...(baseTemplate.areas || []),
      ...(overrides.areas || [])
    ]
  }
}

// Dodatkowe style dla różnych wariantów przezroczystości
export const glassVariants = {
  light: {
    ...glassStyles,
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  medium: {
    ...glassStyles,
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
  },
  dark: {
    ...glassStyles,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  colored: (color: string) => ({
    ...glassStyles,
    backgroundColor: color.startsWith('#') 
      ? `${color}99` // Używamy 99 dla 60% nieprzezroczystości w hex
      : color.replace(')', ', 0.6)') // Dla rgba/hsla
  })
}

// Example usage:
/*
const customPortfolio = createBentoVariant('portfolio', {
  gap: '1rem',
  defaultItemStyles: {
    ...bentoTemplates.portfolio.defaultItemStyles,
    backgroundColor: '#f0f0f0'
  }
})
*/ 