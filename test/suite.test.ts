import { assert, describe, expect, it } from 'vitest';
import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { join, resolve } from 'path';

const root = resolve(fileURLToPath(import.meta.url), '../..');
console.log('Root', root);

describe('suite name', () => {
  it('import TS files dynamically', async () => {
    const files = await readdir(join(root, 'src'));
    console.log('Ts Files', files);

    const imported = await Promise.all(
      files.map((x) => import(resolve(root, 'src', x)))
    );
    console.log('Imported', imported);

    imported.forEach((mod) => {
      expect(mod.test(2)).toEqual(4);
    });
  });

  it('import JS files dynamically', async () => {
    const files = await readdir(join(root, 'dist/src'));
    const jsFiles = files.filter((x) => x.endsWith('.js'));

    console.log('JS files', jsFiles);

    const imported = await Promise.all(
      jsFiles.map((x) => import(resolve(root, 'dist/src', x)))
    );
    console.log('Imported', imported);

    imported.forEach((mod) => {
      expect(mod.test(2)).toEqual(4);
    });
  });
});
