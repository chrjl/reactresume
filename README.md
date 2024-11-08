# React Resume

A fully client-side React app, utilizing [Material UI](https://mui.com/material-ui/), to process and render [JSON Resume](https://jsonresume.org/schema) data (in JSON, JSON5, YAML formats) into a print-formatted HTML and PDF. The document is rendered with components from a [bespoke React component library](https://github.com/chrjl/reactresume--components) styled with custom CSS, [Emotion](https://emotion.sh) styled components for interactive styling, and self-hosted fonts from [Fontsource](https://fontsource.org). PDF generation is via [React-pdf](https://react-pdf.org), with the component library refactored into React-pdf components and styling refactored for the React-pdf StyleSheet API. [React CodeMirror](https://uiwjs.github.io/react-codemirror/) is used for editing resume data in the app.

💻 [Try out the app](https://chrjl.github.io/reactresume)

The project is scaffolded as a [pnpm workspace](https://pnpm.io/workspaces) monorepo, with the following subproject dependencies installed into the `packages/` directory:

- [`@reactresume/types`](https://github.com/chrjl/reactresume--types)
- [`@reactresume/jsonresume-parser`](https://github.com/chrjl/reactresume--jsonresume-parser)
- [`@reactresume/components`](https://github.com/chrjl/reactresume--components)
- [`@reactresume/components-reactpdf`](https://github.com/chrjl/reactresume--components-reactpdf)

## Development

### Install dependencies (including workspace packages)

```
pnpm install
```

### Build workspace packages

```
pnpm run -r [--filter @reactresume/types] build
```

### Run the dev server

Run the Vite server:

```
npm run dev
```

### Push workspace packages (using `git subtree`)

```
git remote add types ...
git subtree push --prefix packages/types types main
```

## Build and deploy

### Deployment to GitHub Pages

GitHub pages project sites are hosted under a URL path (based on the repository name), which requires the following [configuration](https://vite.dev/guide/static-deploy#github-pages):

- Vite `base` property

Build a static export:

```
npm run build
```

Deploy to GitHub pages using [`gh-pages`](https://www.npmjs.com/package/gh-pages):

```
npm run deploy
```

## Notes/issues

- The PDFViewer component provided by `react-pdf` has a bug that does not allow Context to be passed through [(#743)](https://github.com/diegomura/react-pdf/issues/743). The workaround used here is to include another instance of context provider as a child component of the PDFViewer component.