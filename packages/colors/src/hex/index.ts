import { RGBType } from '../rgb/types';
import pantone from '../origins/pantone/pantone';
import crayola from '../origins/crayola/crayola';
import html from '../origins/html/html';
import { Color } from '../origins/types';
import { convertRgbToHsl } from '../rgb';
import { ClosestColor } from './types';
import { HSLType } from '../hsl/types';

/**
 * @see {@link https://www.w3.org/TR/css-color-4/#hex-notation}
 */

export function validateHexColor(hex: string): boolean {
  return /^((0x)?|#?)([\dA-Fa-f]{8}|[\dA-Fa-f]{6}|[\dA-Fa-f]{3,4})$/.test(hex);
}

export function convertHexToRgb(hex: string): false | RGBType {
  if (validateHexColor(hex)) {
    let red = 0;
    let green = 0;
    let blue = 0;
    let alpha = 1;

    const h = hex.slice(1);

    if (h.length === 6 || h.length === 8) {
      red = Number.parseInt(`${h[0]}${h[1]}`, 16);
      green = Number.parseInt(`${h[2]}${h[3]}`, 16);
      blue = Number.parseInt(`${h[4]}${h[5]}`, 16);
      if (h.length === 8) {
        alpha = Number.parseInt(`${h[6]}${h[7]}`, 16);
      }
    } else if (h.length === 3 || h.length === 4) {
      red = Number.parseInt(`${h[0]}${h[0]}`, 16);
      green = Number.parseInt(`${h[1]}${h[1]}`, 16);
      blue = Number.parseInt(`${h[2]}${h[2]}`, 16);
      if (h.length === 4) {
        alpha = Number.parseInt(`${h[3]}${h[3]}`, 16);
      }
    }

    return [red, green, blue, alpha];
  }
  return false;
}

export function convertHexToHsl(hex: string): HSLType | false {
  const rgb = convertHexToRgb(hex);
  if (rgb) return convertRgbToHsl(rgb);
  return false;
}

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
