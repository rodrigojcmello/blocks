/**
 * origin raw.json
 * @see {@link https://www.crayola.com/explore-colors.aspx}
 */
import colors from './raw.json';
import { formatColorTexts, writeColor } from '../utils';

colors.forEach((color) => {
  formatColorTexts(color.a['#text'], color.div['@style'].split(' ')[1], {
    name: 'crayola',
  });
});

writeColor('crayola');
