# @reactresume/workspace

Import [JSON Resume](https://jsonresume.org) data and render a styled and formatted resume out of React components. Refactoring of <https://github.com/chrjl/jsonresume--react-generator> into TypeScript and a metarepo project structure.

This metarepo consists of the following subprojects:

- [`@reactresume/server`](https://github.com/chrjl/reactresume--server)
- [`@reactresume/template`](https://github.com/chrjl/reactresume--template)
- [`@reactresume/jsonresume-parser`](https://github.com/chrjl/reactresume--jsonresume-parser)

and shared libraries:

- [`@reactresume/components`](https://github.com/chrjl/reactresume--components)
- [`@reactresume/types`](https://github.com/chrjl/reactresume--types)

See the [wiki](https://github.com/chrjl/reactresume--workspace/wiki) for more.

## Dev environment

First, clone this repo, fetch workspace packages (submodules), and check for updates to submodules.

```console
git clone --recurse-submodules git@github.com:chrjl/reactresume--workspace.git
```

or

```console
git clone git@github.com:chrjl/reactresume--workspace.git

cd reactresume--workspace/
git submodule update --init
```

- Pull updates to submodules

  ```console
  git submodule update --remote
  ```

To work on individual projects, checkout the `main` branch and (optionally) branch off of it.

```console
git submodule foreach git checkout main
```

## Build the project

Install dependencies

- `pnpm install`: By default, the project is set up as a [`pnpm` workspace](https://pnpm.io/workspaces), so it is simplest to use `pnpm` to install dependencies and resolve workspace-internal dependencies.

- `npm install`: The provided `package.json` also defines [`npm` workspace**s**](https://docs.npmjs.com/cli/v7/using-npm/workspaces), which will install all subproject (workspace) packages and their dependencies into the project root, if used with the `--workspace=true` flag.

  > **Warning**
  > `npm install` does not support the `workspace` protocol, so it will be necessary to go through each workspace package and remove internal dependencies (defined with `workspace:*`).

  ```console
  npm install --ws
  ```

Compile TypeScript
> **Note**
> Dependency errors might be raised by `tsc` because of the order that projects are compiled, and most likely can be ignored.

```console
npm run build
```

- or do it manually

  ```console
  npx tsc -p packages/types
  npx tsc -p packages/components
  npx tsc -p packages/jsonresume-parser
  npx tsc -p packages/template
  ```

## Spin up a dev server

Spin up the dev server from the `server` package.

```console
npm run dev -w packages/server
```

- Use the provided Docker Compose file to run the server in a container (after installing dependencies). The published port can be specified with the `$REACTRESUME_PORT` environment variable (default 5173).

  ```
  REACTRESUME_PORT=8080 docker compose up -d
  ```

