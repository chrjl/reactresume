# React Resume

A fully client-side React app to process and render [JSON Resume](https://jsonresume.org/schema) data (in JSON, JSON5, YAML formats) into a printable document. The app is built using [Material UI](https://mui.com/material-ui/) components. The document is rendered with components from a bespoke React component library and styled with custom CSS, [Emotion](https://emotion.sh) styled components (CSS-in-JS) for interactive styling, and self-hosted fonts from [Fontsource](https://fontsource.org). [React CodeMirror](https://uiwjs.github.io/react-codemirror/) is used for editing resume data in the app.

💻 [Try out the app](https://chrjl.github.io/reactresume)

The project is scaffolded as a [pnpm workspace](https://pnpm.io/workspaces) monorepo, with the following subproject dependencies installed into the `packages/` directory:

- [`@reactresume/types`](https://github.com/chrjl/reactresume--types)
- [`@reactresume/jsonresume-parser`](https://github.com/chrjl/reactresume--jsonresume-parser)
- [`@reactresume/components`](https://github.com/chrjl/reactresume--components)

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
