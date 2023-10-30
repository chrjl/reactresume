# @reactresume/workspace

Import [JSON Resume](https://jsonresume.org) data and render a styled and formatted resume out of React components. Refactoring of <https://github.com/chrjl/jsonresume--react-generator> into TypeScript and a metarepo project structure.

This metarepo consists of the following subprojects

- [`@reactresume/server`](https://github.com/chrjl/reactresume--server)
- [`@reactresume/template`](https://github.com/chrjl/reactresume--template)
- [`@reactresume/jsonresume-parser`](https://github.com/chrjl/reactresume--jsonresume-parser)

and shared libraries:

- [`@reactresume/components`](https://github.com/chrjl/reactresume--components)
- [`@reactresume/types`](https://github.com/chrjl/reactresume--types)

See the [wiki](https://github.com/chrjl/reactresume--workspace/wiki) for more.

## Dev environment

First, clone this repo and fetch workspace packages (submodules) and check for updates to submodules.

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

To work on individual projects, checkout the `main` branch or branch off of it.

```console
git submodule foreach git checkout main
```

