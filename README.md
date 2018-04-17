# monorepo-test

> Test monorepo with publish to github rather than npm

## Symlinking

At time of writing `yarn` workspaces will hoist packages to the root
`node_modules` and install any non-hoistable modules in each package.

This supercedes any symlinking features of monorepo tools.

## Publishing a package

* Create an orphaned branch

  ```sh
  git checkout --orphan <tagname>
  ```

* Move package contents to the root of the working-copy.

* Remove all other files

* Commit

  ```sh
  git commit -m <tagname>
  ```

* Tag

  ```sh
  git tag <tagname>
  ```

* Push tag but **not** the branch

  ```sh
  git push --tags
  ```

## Reference an older version

* Update `package.json` in dependent package

  ```json
  "dependencies": {
    "@scope/pkg": "github:scope/pkg#tagname"
  }
  ```

* Reinstall `node_modules` in dependent package

  It can be helpful to have a root `postinstall` script that runs a
  clean of all packages. With this a root `yarn install` will do the
  job.