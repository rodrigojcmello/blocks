import { RGB } from '../rgb/types';
import { HSL } from './types';

// -----------------------------------------------------------------------------
// sRGB - standard RGB (Red, Green, Blue)
// -----------------------------------------------------------------------------

export function validateHsl(hsl: HSL): boolean {
  const hue = hsl[0];
  const saturation = hsl[1];
  const lightness = hsl[2];
  const alpha = hsl[3];

  return (
    hue >= 0 &&
    hue <= 360 &&
    saturation >= 0 &&
    saturation <= 100 &&
    lightness >= 0 &&
    lightness <= 100 &&
    alpha >= 0 &&
    alpha <= 1
  );
}

export function convertHslToRgb(hsl: HSL): RGB | false {
  if (validateHsl(hsl)) {
    const h = hsl[0];
    let s = hsl[1];
    let l = hsl[2];
    const alpha = hsl[3];

    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let red = 0;
    let green = 0;
    let blue = 0;

    if (h >= 0 && h < 60) {
      red = c;
      green = x;
      blue = 0;
    } else if (h >= 60 && h < 120) {
      red = x;
      green = c;
      blue = 0;
    } else if (h >= 120 && h < 180) {
      red = 0;
      green = c;
      blue = x;
    } else if (h >= 180 && h < 240) {
      red = 0;
      green = x;
      blue = c;
    } else if (h >= 240 && h < 300) {
      red = x;
      green = 0;
      blue = c;
    } else if (h >= 300 && h < 360) {
      red = c;
      green = 0;
      blue = x;
    }

    red = Math.round((red + m) * 255);
    green = Math.round((green + m) * 255);
    blue = Math.round((blue + m) * 255);

    return [red, green, blue, alpha];
  }
  return false;
}

export function convertHslToHex(hsl: HSL): string | false {
  const rgb = convertHslToRgb(hsl);

  if (rgb) {
    let red = rgb[0].toString(16);
    let green = rgb[1].toString(16);
    let blue = rgb[2].toString(16);
    const alpha = (rgb[3] === 1 ? '' : Math.round(rgb[3] * 255)).toString(16);

    if (red.length === 1) red = `0${red}`;
    if (green.length === 1) green = `0${green}`;
    if (blue.length === 1) blue = `0${blue}`;

    return `#${red}${green}${blue}${alpha}`.toUpperCase();
  }
  return false;
}
