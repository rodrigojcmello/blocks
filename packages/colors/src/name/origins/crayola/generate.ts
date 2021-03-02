/**
 * origin raw.json
 * @see {@link https://www.crayola.com/explore-colors.aspx}
 */
import colors from './raw.json';
import { writeColor } from '../common';
import { formatColorTexts } from '../../utils';

for (const color of colors) {
  formatColorTexts(color.a['#text'], color.div['@style'].split(' ')[1]);
}

writeColor('crayola');
