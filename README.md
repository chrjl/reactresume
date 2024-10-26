# React Resume

A fully client-side React app to process and render [JSON Resume](https://jsonresume.org/schema) data into a printable document. The app is built using [Material UI](https://mui.com/material-ui/) components. The document is rendered with components from a bespoke React component library and styled with custom CSS, CSS-in-JS for interactive styling, and self-hosted fonts from [Fontsource](https://fontsource.org).

## Development

### Run the dev server

Run the Vite server:

```
npm run dev
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
