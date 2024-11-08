# `@reactresume/components-reactpdf`

[React resume](https://github.com/chrjl/reactresume) [component library](https://github.com/chrjl/reactresume--components) refactored into [React-pdf](https://react-pdf.org) components, built using Vite library mode with `vite-plugin-dts` and `vite-plugin-lib-inject-css` plugins.

🗎 [Check out a catalog of included components.](https://github.com/chrjl/reactresume--components-reactpdf/blob/main/assets/catalog.pdf)

## Components

### Utility exports

- Shared types
- HorizontalList component: right and left variants
- UnorderedList component: with customizable padding
- LinkifiedSpan component: converts email and URL strings into `<Link>` elements (ordinary strings to `<Text>` elements)

### Display components

#### Standardized set of props

Accepts a standardized list of props that correspond to React Resume `ResumeEntry` objects (see [@reactresume/types](https://github.com/chrjl/reactresume--types)).

- title
- subtitle
- note
- description
- highlights

#### Components

- HeadingCard
- DescriptionTable
- StackedCard
- GridCard

## Build

Build the component library to `dist/`. The library components are authored under the `lib/` directory.

```
npm run build
```

## Development

Run a Vite server with a test app to test library components. The test server is authored under the `src/` directory.

```
npm run dev
```
