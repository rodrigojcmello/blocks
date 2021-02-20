import { ClosestColor, FindColorName } from './types';
import pantone from './origins/pantone/pantone';
import crayola from './origins/crayola/crayola';
import html from './origins/html/html';
import { Color } from './origins/types';
import { convertHexToRgb } from '../hex';

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
      rgb: [0, 0, 0, 0],
      hsl: [0, 0, 0, 0],
      origin: { name: '' },
    };

    let closestColors: ClosestColor[] = [];

    for (const color of [...pantone, ...crayola, ...html] as Color[]) {
      const rgb2 = convertHexToRgb(color.hex);
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
            ...color,
          };
          closestColors = [closestColor];
        } else if (distance === closestColor.distance) {
          closestColors.push({
            distance,
            ...color,
          });
        }
      }
    }

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
