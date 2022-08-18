'use strict';

function slugify(string) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "")
      .replace(/-+@/, "")
      .replace("<script>", "script")
      .replace("(", "")
      .replace(")", "")
}

module.exports.slugify = slugify;