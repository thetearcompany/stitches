Update June 19, 2023: Stitches is no longer actively maintained due to changes in the React ecosystem and maintainer availability. You can <a href="https://github.com/stitchesjs/stitches/discussions/1149#discussioncomment-6223090">read more here</a>.

---

<a href="https://stitches.dev">
  <img alt="stitches" src="https://user-images.githubusercontent.com/372831/112011920-03e21400-8b29-11eb-9c9a-4e14d5a1f575.png" />
</a>

# Stitches

Nowoczesna biblioteka CSS-in-JS z zaawansowanymi funkcjami.

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
