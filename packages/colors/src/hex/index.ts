import { convertRgbToHsl } from '../rgb';
import {
  RemoveHexPrefix,
  ConvertHexToHsl,
  ConvertHexToRgb,
  ValidateHexColor,
} from './types';

/**
 * @see {@link https://www.w3.org/TR/css-color-4/#hex-notation}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#hexadecimal_numbers}
 */
export const validateHexColor: ValidateHexColor = function (hexColor) {
  return /^(0x|#)?([\da-f]{8}|[\da-f]{6}|[\da-f]{3,4})$/i.test(hexColor);
};

export const removeHexPrefix: RemoveHexPrefix = function (hexColor) {
  let start = 0;
  if (/^(0x)/i.test(hexColor)) start = 2;
  if (/^(#)/.test(hexColor)) start = 1;
  return hexColor.slice(start).toUpperCase();
};

export const convertHexToRgb: ConvertHexToRgb = function (hexColor) {
  if (validateHexColor(hexColor)) {
    let red = 0;
    let green = 0;
    let blue = 0;
    let alpha = 1;

    const hex = removeHexPrefix(hexColor);

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
};

export const convertHexToHsl: ConvertHexToHsl = function (hexColor) {
  const rgb = convertHexToRgb(hexColor);
  if (rgb) return convertRgbToHsl(rgb);
  return false;
};
