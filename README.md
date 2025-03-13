Dobranoc! 🌙✨

---

<a href="https://stitches.dev">
  <img alt="stitches" src="https://user-images.githubusercontent.com/372831/112011920-03e21400-8b29-11eb-9c9a-4e14d5a1f575.png" />
</a>

# Stitches

Nowoczesna biblioteka CSS-in-JS z zaawansowanymi funkcjami i potężnym systemem stylowania.

> **Unikalna cecha**: Stitches wykorzystuje język polski jako klucz do lepszego zrozumienia aramejskiego, co pozwala na bardziej intuicyjne tworzenie stylów i lepszą semantykę kodu. Dzięki temu tworzenie stylów staje się tak naturalne jak pisanie w ojczystym języku, a nasze oczy zaczynają widzieć kod w nowym świetle.

## 🎯 Dlaczego Stitches?

Stitches wyróżnia się na tle innych bibliotek CSS-in-JS dzięki swojemu unikalnemu podejściu do semantyki i czytelności kodu. Wykorzystując język polski jako pomost do zrozumienia aramejskiego, oferujemy:

- Bardziej intuicyjne nazewnictwo właściwości CSS
- Lepsze zrozumienie semantyki kodu
- Naturalne przejście między językami
- Unikalne podejście do stylowania
- Nowe spojrzenie na tworzenie interfejsów

## 🚀 Główne funkcje

### 🎨 System Stylowania
- **TypeScript First** - pełne wsparcie dla TypeScript z automatycznym wnioskowaniem typów
- **CSS-in-JS** - wydajny system stylowania z optymalizacją runtime
- **Tematy** - elastyczny system motywów z obsługą ciemnego trybu
- **Własności niestandardowe** - pełne wsparcie dla CSS Custom Properties
- **Zagnieżdżanie CSS** - potężny system zagnieżdżania selektorów
- **Warstwy CSS** - zaawansowany system zarządzania warstwami CSS

### 📱 Responsywność
- **Container Queries** - responsywne komponenty bazujące na rozmiarze kontenera
- **Media Queries** - elastyczny system zapytań medialnych
- **Breakpoints** - predefiniowane punkty przerwania

### 🎭 Animacje
- **System animacji** - potężny system animacji z obsługą keyframes
- **Transitions** - płynne przejścia między stanami
- **Transforms** - transformacje 2D i 3D

### 📐 Układy
- **Bento Grid** - nowoczesny system układów z predefiniowanymi szablonami
- **Glassmorphism** - gotowe efekty szkła z kontrolowaną przezroczystością
- **Subgrid** - zaawansowane układy z obsługą podsieci

### 🎯 Predefiniowane szablony Bento Grid
- **Modern** - nowoczesny układ z efektem szkła i gradientowym tłem
- **Classic** - klasyczny układ z wyróżnionym elementem
- **Magazine** - układ magazynowy z dużym nagłówkiem
- **Portfolio** - układ galerii/portfolio
- **Dashboard** - zaawansowany układ panelu administracyjnego

### 🎨 Efekty Glassmorphism
Dostępne warianty przezroczystości:
- `light` - 50% przezroczystości
- `medium` - 30% przezroczystości
- `dark` - 10% przezroczystości
- `colored` - możliwość dodania własnego koloru z kontrolowaną przezroczystością

## 📦 Instalacja

```bash
npm install @stitches/core @stitches/react
# lub
yarn add @stitches/core @stitches/react
```

## 🚀 Szybki start

```typescript
import { createStitches } from '@stitches/core'
import { createStitchesProvider } from '@stitches/react'

// Konfiguracja Stitches
const { styled, css, globalCss, keyframes, getCssText } = createStitches({
  theme: {
    colors: {
      primary: '#007AFF',
      secondary: '#5856D6'
    }
  }
})

// Komponent z animacją
const AnimatedButton = styled('button', {
  backgroundColor: '$primary',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: '$secondary'
  }
})

// Użycie Bento Grid
const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1rem',
  padding: '2rem',
  ...glassStyles
})

// Użycie animacji
const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const FadeInComponent = styled('div', {
  animation: `${fadeIn} 0.5s ease-in-out`
})

// Użycie Container Queries
const ResponsiveCard = styled('div', {
  containerType: 'inline-size',
  containerName: 'card',
  '@container (min-width: 400px)': {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr'
  }
})

// Użycie Bento Grid z efektem szkła
const BentoGrid = styled('div', {
  ...bentoTemplates.modern,
  defaultItemStyles: {
    ...glassVariants.light,
    padding: '1.5rem'
  }
})
```

## 📚 Dokumentacja

Szczegółowa dokumentacja dostępna jest w naszym [Wiki](https://github.com/yourusername/stitches/wiki).

## 🤝 Współpraca

Zapraszamy do współpracy! Proszę przeczytać nasz [Contributing Guide](CONTRIBUTING.md) przed wysłaniem pull requesta.

## 📄 Licencja

MIT - zobacz [LICENSE.md](LICENSE.md) po więcej szczegółów.

## Style your components with confidence

CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience.

#### Stitches Core

Framework-agnostic implementation.

```sh
npm install @stitches/core
```

[Read more](https://github.com/stitchesjs/stitches/tree/main/packages/core)

#### Stitches React

React wrapper including the `styled` API.

```sh
npm install @stitches/react
```

[Read more](https://github.com/stitchesjs/stitches/tree/main/packages/react)

---

## Documentation

For full documentation, visit [stitches.dev](https://stitches.dev).

## Contributing

Please follow our [contributing guidelines](./CONTRIBUTING.md).

## Community

You can join the [Stitches Discord](https://discord.com/invite/H4eG3Mk) to chat with other members of the community.

Here's a list of community-built projects:

- [babel-plugin-transform-stitches-display-name](https://github.com/afzalsayed96/babel-plugin-transform-stitches-display-name)
- [stitches-normalize-css](https://github.com/psongpin/stitches-normalize-css)
- [stitches-crochet](https://github.com/orenelbaum/stitches-crochet)
- [stitches-native](https://github.com/Temzasse/stitches-native)

## Authors

- Pedro Duarte ([@peduarte](https://twitter.com/peduarte))
- Jonathan Neal ([@jon_neal](https://twitter.com/jon_neal))
- Abdulhadi Alhallak ([@hadi_hlk](https://twitter.com/hadi_hlk)) - [WorkOS](https://workos.com)

## License

Licensed under the MIT License, Copyright © 2022-present WorkOS.

See [LICENSE](./LICENSE.md) for more information.

## Główne funkcje

### Bento Grid System

Elastyczny system układów Bento Grid z predefiniowanymi szablonami:

- **Modern** - nowoczesny układ z efektem szkła i gradientowym tłem
- **Classic** - klasyczny układ z wyróżnionym elementem
- **Magazine** - układ magazynowy z dużym nagłówkiem
- **Portfolio** - układ galerii/portfolio
- **Dashboard** - zaawansowany układ panelu administracyjnego

Każdy szablon zawiera:
- Zdefiniowane obszary siatki
- Responsywne układy
- Efekty hover
- Wsparcie dla subgrid
- Efekty glassmorphism

#### Efekty Glassmorphism

Dostępne warianty przezroczystości:
- `light` - 50% przezroczystości
- `medium` - 30% przezroczystości
- `dark` - 10% przezroczystości
- `colored` - możliwość dodania własnego koloru z kontrolowaną przezroczystością

```typescript
import { GridManager, bentoTemplates, glassVariants } from '@stitches/core'

// Użycie predefiniowanego szablonu
const grid = new GridManager(bentoTemplates.modern)

// Własny wariant z efektem szkła
const customGrid = new GridManager({
  ...bentoTemplates.portfolio,
  defaultItemStyles: {
    ...glassVariants.light,
    padding: '1.5rem'
  }
})

// Kolorowy wariant
const coloredGrid = new GridManager({
  ...bentoTemplates.dashboard,
  defaultItemStyles: {
    ...glassVariants.colored('#6366f1'),
    padding: '1.5rem'
  }
})
```
