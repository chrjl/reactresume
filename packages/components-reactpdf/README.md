# `@reactresume/components-reactpdf`

[React resume](https://github.com/chrjl/reactresume) [component library](https://github.com/chrjl/reactresume--components) refactored into [React-pdf](https://react-pdf.org) components, built using Vite library mode with `vite-plugin-dts` and `vite-plugin-lib-inject-css` plugins.

🗎 [Check out a catalog of included components.](https://github.com/chrjl/reactresume--components-reactpdf/blob/main/assets/catalog.pdf)

## Usage

### Fonts

The display components in this library depend on the following fonts: Arimo, Inter, Roboto. TTF (non-variable regular and bold) versions of these fonts need to be [registered](https://react-pdf.org/fonts) before using these components.

Self-hosting example:

```js
import Inter from './assets/Inter-Regular.ttf';
import InterBold from './assets/Inter-Bold.ttf';
import Roboto from './assets/Roboto-Regular.ttf';
import RobotoBold from './assets/Roboto-Bold.ttf';
import Arimo from './assets/Arimo-Regular.ttf';
import ArimoBold from './assets/Arimo-Bold.ttf';

Font.register({
  family: 'Roboto',
  fonts: [{ src: Roboto }, { src: RobotoBold, fontWeight: 700 }],
});

Font.register({
  family: 'Inter',
  fonts: [{ src: Inter }, { src: InterBold, fontWeight: 700 }],
});

Font.register({
  family: 'Arimo',
  fonts: [{ src: Arimo }, { src: ArimoBold, fontWeight: 700 }],
});
```

To disable hyphenation:

```js
Font.registerHyphenationCallback(word => [word]);
````

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
