# `@reactresume/components`

Component library for [React Resume](https://github.com/chrjl/reactresume) built using Vite library mode with `vite-plugin-dts` and `vite-plugin-lib-inject-css` plugins..

## Components

### Utility exports

- Shared types
- HorizontalList component: right and left variants
- LinkifiedSpan component: converts email and URL strings into `<a>` elements (ordinary strings to `<span>` elements)

### Display components

#### Standardized set of props

Accepts a standardized list of props that correspond to React Resume `ResumeEntry` objects (see [@reactresume/types](https://github.com/chrjl/reactresume--types)).

- title
- subtitle
- note
- description
- highlights

#### Components

- HeaderCard
- DescriptionTable
- CardStacked
- CardGrid

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
