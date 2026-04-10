#!/usr/bin/env node

/**
 * Embeds asset images as base64 data URIs in fundeen.css.
 * Run this before `npm publish` so the published package is self-contained.
 *
 * Usage: node scripts/embed-assets.js
 */

const fs = require('fs');
const path = require('path');

const CSS_PATH = path.resolve(__dirname, '..', 'fundeen.css');

const MIME_TYPES = {
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

let css = fs.readFileSync(CSS_PATH, 'utf8');

// Collect unique asset references
const urlPattern = /url\(['"]?\.\/(assets\/[^'")\s]+)['"]?\)/g;
const assets = new Set();
let match;
while ((match = urlPattern.exec(css)) !== null) {
  assets.add(match[1]);
}

// Replace each unique asset
let replaced = 0;
for (const relPath of assets) {
  const absPath = path.resolve(__dirname, '..', relPath);

  if (!fs.existsSync(absPath)) {
    console.warn(`Warning: asset not found: ${relPath}`);
    continue;
  }

  const ext = path.extname(absPath).toLowerCase();
  const mime = MIME_TYPES[ext];
  if (!mime) {
    console.warn(`Warning: unknown mime type for ${relPath}`);
    continue;
  }

  const b64 = fs.readFileSync(absPath).toString('base64');
  const dataUri = `data:${mime};base64,${b64}`;
  const searchStr = `./${relPath}`;

  css = css.replaceAll(
    `url('${searchStr}')`,
    `url('${dataUri}')`
  );
  replaced++;
  console.log(`Embedded: ${relPath} (${(b64.length / 1024).toFixed(0)} KB)`);
}

fs.writeFileSync(CSS_PATH, css);
console.log(`\nDone. ${replaced} asset(s) embedded. CSS size: ${(css.length / 1024).toFixed(0)} KB`);
