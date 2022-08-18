# Utilities

utilities npm packages for My Project and CLI tools - Managed using Lerna.

## Usgae

- Create `npmrc` file and save the NPM access token for package publishing (don't forget add this file into `.gitignore`)

```sh
//registry.npmjs.org/:_authToken=<your npm account access token>
@mskian:registry=https://registry.npmjs.org/
```

- Create New Package with Lerna

```sh
lerna create hello-world
```

- Publish package

```sh
lerna publish
```

## LICENSE

MIT
