import { RGB } from './types';
import { HSL } from '../hsl/types';

/**
 * @see {@link https://www.rapidtables.com/convert/color/rgb-to-hsl.html}
 */

// eslint-disable-next-line import/prefer-default-export
export function convertRgbToHsl(RGB: RGB): false | HSL {
  const red = RGB[0] / 255;
  const green = RGB[1] / 255;
  const blue = RGB[2] / 255;
  const alpha = RGB[3];

  const cMin = Math.min(red, green, blue);
  const cMax = Math.max(red, green, blue);
  const delta = cMax - cMin;

  let hue: number;

  if (delta === 0) {
    hue = 0;
  } else if (cMax === red) {
    hue = ((green - blue) / delta) % 6;
  } else if (cMax === green) {
    hue = (blue - red) / delta + 2;
  } else {
    hue = (red - green) / delta + 4;
  }

  hue = Math.round(hue * 60);
  if (hue < 0) hue += 360;

  let lightness = (cMax + cMin) / 2;
  let saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

  saturation = Math.round(saturation * 100);
  lightness = Math.round(lightness * 100);

  return [hue, saturation, lightness, alpha];
}
