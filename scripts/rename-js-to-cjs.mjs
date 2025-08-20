// scripts/rename-js-to-cjs.mjs
import { readdir, rename } from 'fs/promises';
import path from 'path';

const dir = 'dist/e2e';

const files = await readdir(dir);

await Promise.all(
  files
    .filter(f => f.endsWith('.js'))
    .map(f =>
      rename(path.join(dir, f), path.join(dir, f.replace(/\.js$/, '.cjs')))
    )
);

console.log('Renamed .js files to .cjs ✅');
