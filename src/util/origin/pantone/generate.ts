/**
 * origin raw.json
 * @see {@link https://raw.githubusercontent.com/Margaret2/pantone-colors/master/pantone-numbers.json}
 */
import pantone from './raw.json';
import { formatColorTexts, writeColor } from '../utils';

interface Pantone {
  [key: string]: {
    name: string;
    hex: string;
  };
}
const pan: Pantone = pantone;

Object.keys(pan).forEach((key) => {
  const hex = `#${pan[key].hex}`.replaceAll(',', '');
  formatColorTexts(pan[key].name, hex, {
    name: 'pantone',
    code: key,
  });
});

writeColor('pantone');
