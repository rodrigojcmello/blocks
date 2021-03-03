/* eslint-disable no-console */
import pantone from './pantone/pantone';
import crayola from './crayola/crayola';
import html from './html/html';
import colorNamesOrg from './color-names-org/color-name-org';
import { formatColorTexts, writeColor } from './common';
import { formatColorName } from '../utils';

const colors = [...colorNamesOrg, ...html, ...crayola, ...pantone];

interface ColorTest {
  [hex: string]: string;
}

const colorsNoRepeated: ColorTest = {};

let repeated = 0;

for (const color of colors) {
  if (colorsNoRepeated[color[0]]) {
    repeated += 1;
    console.log(`repeated ${color[0]}`);
  }
  // eslint-disable-next-line prefer-destructuring
  colorsNoRepeated[color[0]] = color[1];
}

console.log(`repeated colors ${repeated}`);

for (const color of Object.keys(colorsNoRepeated)) {
  formatColorTexts(formatColorName(colorsNoRepeated[color]), color);
}

writeColor('colors');
