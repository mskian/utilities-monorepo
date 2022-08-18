# Utilities

Utilities Monorepo `npm` packages for My Projects and CLI tools - Managed using Lerna.

## Usage

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

## packages

- Convert Speed from Meter Per Seconds to Kilometer Per Hour.

```sh
npm install @mskian/speed-conversion --save

or

yarn add @mskian/speed-conversion
```

## LICENSE

MIT
