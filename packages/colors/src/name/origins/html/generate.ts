/**
 * origin raw.json
 * @see {@link https://github.com/ekelseya/colorNames/blob/master/colors.json}
 */
import { colors } from './raw.json';
import { formatColorTexts, writeColor } from '../common';

for (const color of colors) {
  formatColorTexts(color.name, color.hex, {
    name: 'html',
    code: color['html-name'],
  });
}

writeColor('html');
