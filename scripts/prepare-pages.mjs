import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist', 'client');
const routes = ['work', 'interests'];

for (const route of routes) {
  const routeDirectory = join(outputDirectory, route);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(join(outputDirectory, `${route}.html`), join(routeDirectory, 'index.html'));
}
