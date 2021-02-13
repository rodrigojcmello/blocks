/**
 * origin raw.json
 * @see {@link https://www.crayola.com/explore-colors.aspx}
 */
import colors from './raw.json';
import { formatColorTexts, writeColor } from '../common';

for (const color of colors) {
  formatColorTexts(color.a['#text'], color.div['@style'].split(' ')[1], {
    name: 'crayola',
  });
}

writeColor('crayola');
