import fs from 'fs';
import { exec } from 'child_process';
import { HEXtoHSL, HEXtoRGB } from '../color';
import { Color, Origin } from './types';

let names: Color[] = [];

const exceptionWords = new Set(['of', 'de', 'with', 'in', 'the']);

function capitalize(word: string, all?: boolean): string {
  if (all) {
    return word
      .split(' ')
      .map((w) => capitalize(w))
      .join(' ');
  }
  if (exceptionWords.has(word.toLowerCase())) {
    return word.toLowerCase();
  }
  if (word.charAt(1) === "'") {
    return word.slice(0, 3).toUpperCase() + word.slice(3);
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function formatColorTexts(
  name: string,
  hex: string,
  origin: Origin
): void {
  const RGB = HEXtoRGB(hex);
  const HSL = HEXtoHSL(hex);
  const nameDone = capitalize(
    name.trim().replaceAll('-', ' ').replaceAll('w/', 'with'),
    true
  );

  /**
   * Helps identify names without space
   */
  if (nameDone.length > 7 && !nameDone.match(' ')) {
    console.log('large name', name);
  }

  /**
   * Helps identify prepositions
   */
  nameDone.split(' ').forEach((word) => {
    if (word.length <= 3) {
      console.log('short word', word, hex);
    }
  });

  if (!RGB || !HSL) {
    console.log('Invalid HEX', { hex, RGB, HSL });
  } else {
    names.push({
      name: nameDone,
      token: nameDone.toLowerCase().replaceAll(' ', '-').replaceAll("'", '-'),
      hex: hex.toUpperCase(),
      rgb: RGB,
      hsl: HSL,
      origin,
    });
  }
}

export function writeColor(origin: string): void {
  names = names.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  fs.writeFile(
    `${origin}.ts`,
    `const ${origin} = ${JSON.stringify(names)}; export default ${origin}`,
    (): void => {
      console.log(`${names.length} colors`);
      exec(`prettier --write ${origin}.ts`);
    }
  );
}
