# Slugify

Slugify the User input - Convert into SEO Friendly URL  

```sh
npm install @mskian/slugify --save

or

yarn add @mskian/slugify
```

## Usage

```js
// Commonjs Import
const { slugify } = require("@mskian/slugify");

// or ES6 import
import { slugify } from "@mskian/slugify";

console.log(slugify('The Dreams of the Healer'));
// output - the-dreams-of-the-healer
```

I use this on My Projects to Slugify the Value from Query Parameters  
Support both Vite JS and Rollup JS.

```js
window.open("https://example.com/api/" + slugify(name), "_self", "noopener, noreferrer");
```

## LICENSE

MIT
