import { copyFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';
import { join } from 'node:path';
const root = process.cwd();
const target = join(root, 'www');
rmSync(target, { recursive: true, force: true });
mkdirSync(target, { recursive: true });
for (const f of ['index.html', 'app.js', 'styles.css', 'manifest.webmanifest', 'sw.js']) {
  copyFileSync(join(root, f), join(target, f));
}
cpSync(join(root, 'icons'), join(target, 'icons'), { recursive: true });
console.log('Archivos web copiados a www/');
