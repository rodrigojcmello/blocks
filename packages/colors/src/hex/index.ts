import { RGBType } from '../rgb/types';
import { convertRgbToHsl } from '../rgb';
import { HSLType } from '../hsl/types';

/**
 * @see {@link https://www.w3.org/TR/css-color-4/#hex-notation}
 */

export function validateHexColor(hex: string): boolean {
  return /^((0x)?|#?)([\dA-Fa-f]{8}|[\dA-Fa-f]{6}|[\dA-Fa-f]{3,4})$/.test(hex);
}

export function convertHexToRgb(hexColor: string): false | RGBType {
  if (validateHexColor(hexColor)) {
    let red = 0;
    let green = 0;
    let blue = 0;
    let alpha = 1;

    const hex = hexColor.slice(1);

    if (hex.length === 6 || hex.length === 8) {
      red = Number.parseInt(`${hex[0]}${hex[1]}`, 16);
      green = Number.parseInt(`${hex[2]}${hex[3]}`, 16);
      blue = Number.parseInt(`${hex[4]}${hex[5]}`, 16);
      if (hex.length === 8) {
        alpha = Number.parseInt(`${hex[6]}${hex[7]}`, 16);
      }
    } else if (hex.length === 3 || hex.length === 4) {
      red = Number.parseInt(`${hex[0]}${hex[0]}`, 16);
      green = Number.parseInt(`${hex[1]}${hex[1]}`, 16);
      blue = Number.parseInt(`${hex[2]}${hex[2]}`, 16);
      if (hex.length === 4) {
        alpha = Number.parseInt(`${hex[3]}${hex[3]}`, 16);
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
