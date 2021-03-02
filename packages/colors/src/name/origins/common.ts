import fs from 'fs';
import { exec } from 'child_process';
import { Color } from './types';
import { formatColorName, formatToken } from '../utils';

const names: Color[] = [];

export function formatColorTexts(name: string, hex: string): void {
  const formattedName = formatColorName(name);
  const formattedToken = formatToken(name);
  if (formattedName && formattedToken) {
    names.push([hex.toUpperCase(), name]);
  }
}

export function writeColor(origin: string): void {
  fs.writeFile(
    `${origin}.ts`,
    `const ${origin} = ${JSON.stringify(names)}; export default ${origin}`,
    (): void => {
      // eslint-disable-next-line no-console
      console.log(`${names.length} colors`);
      exec(`prettier --single-quote --write ${origin}.ts`);
    }
  );
}
