/**
 * origin raw.json
 * @see {@link https://github.com/ekelseya/colorNames/blob/master/colors.json}
 */
import { colors } from './raw.json';
import { writeColor } from '../common';
import { formatColorTexts } from '../../utils';

for (const color of colors) {
  formatColorTexts(color.name, color.hex);
}

writeColor('html');
