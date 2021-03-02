/**
 * origin raw.json
 * @see {@link https://raw.githubusercontent.com/Margaret2/pantone-colors/master/pantone-numbers.json}
 */
import pantone from './raw.json';
import { writeColor } from '../common';
import { formatColorTexts } from '../../utils';

interface Pantone {
  [key: string]: {
    name: string;
    hex: string;
  };
}
const pan: Pantone = pantone;

for (const key of Object.keys(pan)) {
  const hex = `#${pan[key].hex}`.replaceAll(',', '');
  formatColorTexts(pan[key].name, hex);
}

writeColor('pantone');
