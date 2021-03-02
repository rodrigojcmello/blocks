import { ClosestColor, FindColorName } from './types';
import pantone from './origins/pantone/pantone';
import crayola from './origins/crayola/crayola';
import html from './origins/html/html';
import colorNamesOrg from './origins/color-names-org/color-name-org';
import { Color } from './origins/types';
import { convertHexToRgb } from '../hex';
import { formatColorName, formatToken } from './utils';

/**
 * @see {@link https://en.wikipedia.org/wiki/Color_difference}
 */
export const findColorName: FindColorName = function (hexColor) {
  const rgb1 = convertHexToRgb(hexColor);
  if (rgb1) {
    const R1 = rgb1[0];
    const G1 = rgb1[1];
    const B1 = rgb1[2];

    let closestColor: ClosestColor = {
      distance: Number.POSITIVE_INFINITY,
      name: '',
      token: '',
      hex: '',
    };

    let closestColors: ClosestColor[] = [];

    // eslint-disable-next-line no-console
    console.log([...pantone, ...crayola, ...html, ...colorNamesOrg].length);

    for (const color of [
      ...pantone,
      ...crayola,
      ...html,
      ...colorNamesOrg,
    ] as Color[]) {
      const rgb2 = convertHexToRgb(color[0]);
      if (rgb2) {
        const R2 = rgb2[0];
        const G2 = rgb2[1];
        const B2 = rgb2[2];

        const distance = Math.sqrt(
          (R1 - R2) ** 2 + (G1 - G2) ** 2 + (B1 - B2) ** 2
        );

        if (distance < closestColor.distance) {
          closestColor = {
            distance,
            hex: color[0],
            name: formatColorName(color[1]),
            token: formatToken(color[1]),
          };
          closestColors = [closestColor];
        } else if (distance === closestColor.distance) {
          closestColors.push({
            distance,
            hex: color[0],
            name: formatColorName(color[1]),
            token: formatToken(color[1]),
          });
        }
      }
    }

    // eslint-disable-next-line no-console
    console.log({ closestColors });

    return closestColor;
  }
  return false;
};

/*
00 = red - Red - Red
30 = orange - Orange Circuit - Orange
60 = yellow - Brilliant Yellow - Yellow
90 = green - Chartreuse
120 = green - Lime
150 = green - Spring Green
180 = blue - Aqua
210 = blue - Blue
240 = purple - Blue
270 = violet - Dark Violet
300 = magento - Fuchs Ia
330 = pink - Deep Pink

 */
