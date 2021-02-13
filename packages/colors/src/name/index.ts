import { ClosestColor } from './types';
import pantone from './origins/pantone/pantone';
import crayola from './origins/crayola/crayola';
import html from './origins/html/html';
import { Color } from './origins/types';
import { convertHexToRgb } from '../hex';

/**
 * @see {@link https://en.wikipedia.org/wiki/Color_difference}
 */

export function findColorName(HEX: string): ClosestColor | false {
  const RGB1 = convertHexToRgb(HEX);
  if (RGB1) {
    const R1 = RGB1[0];
    const G1 = RGB1[1];
    const B1 = RGB1[2];

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
      const RGB2 = convertHexToRgb(color.hex);
      if (RGB2) {
        const R2 = RGB2[0];
        const G2 = RGB2[1];
        const B2 = RGB2[2];

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
}
