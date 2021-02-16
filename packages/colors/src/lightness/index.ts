import { convertHexToHsl, convertHexToRgb } from '../hex';
import { convertHslToHex } from '../hsl';
import {
  ColorContrast,
  ContrastRatio,
  ContrastScore,
  RelativeLuminance,
} from './types';

function getLightnessRadio(
  lightness = 55,
  range = 5,
  lighter = 5,
  darker = 95
) {
  const scale = [];
  const lightRange = (lightness - lighter) / range;
  for (let i = lighter; Math.round(i) < lightness; i += lightRange) {
    scale.push(Math.round(i));
  }
  const darkRange = (darker - lightness) / range;
  for (let i = lightness; Math.round(i) <= darker + 1; i += darkRange) {
    scale.push(Math.round(i));
  }
  return scale.reverse();
}

export function getLightnessColor(hex: string): false | string[] {
  const hsl = convertHexToHsl(hex);
  if (hsl) {
    const originalLightness = hsl[2];
    return getLightnessRadio(originalLightness)
      .map((lightness): string | false => {
        const newHsl = hsl;
        newHsl[2] = lightness;
        return convertHslToHex(newHsl);
      })
      .filter(Boolean) as string[];
  }
  return false;
}

// -----------------------------------------------------------------------------

/**
 * @see {@link https://www.w3.org/TR/WCAG20/#contrast-ratiodef}
 */
export const contrastRatio: ContrastRatio = function (
  relativeLuminance1,
  relativeLuminance2
) {
  const lighter = Math.max(relativeLuminance1, relativeLuminance2);
  const darker = Math.min(relativeLuminance1, relativeLuminance2);
  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * @see {@link https://www.w3.org/TR/WCAG20/#relativeluminancedef}
 * @see {@link https://en.wikipedia.org/wiki/Rec._709#Luma_coefficients}
 */
export const relativeLuminance: RelativeLuminance = function (rgb) {
  const RsRGB = rgb[0] / 255;
  const GsRGB = rgb[1] / 255;
  const BsRGB = rgb[2] / 255;

  const r = RsRGB <= 0.03928 ? RsRGB / 12.92 : RsRGB + 0.055 / 1.055 ** 2.4;
  const g = GsRGB <= 0.03928 ? GsRGB / 12.92 : GsRGB + 0.055 / 1.055 ** 2.4;
  const b = BsRGB <= 0.03928 ? BsRGB / 12.92 : BsRGB + 0.055 / 1.055 ** 2.4;

  const redCoefficient = 0.2126;
  const greenCoefficient = 0.7152;
  const blueCoefficient = 0.0722;

  return r * redCoefficient + g * greenCoefficient + b * blueCoefficient;
};

/**
 * @see {@link https://www.w3.org/TR/WCAG20/#larger-scaledef}
 */
export const contrastScore: ContrastScore = function (
  contrast,
  fontSize,
  bold
) {
  let score = 'fail';

  if (contrast >= 3) {
    score = 'AA Large';
  }

  if (contrast >= 4.5) {
    score = 'AA';
  }

  if (contrast >= 7) {
    // if (contrast >= 7 && (fontSize >= 18 || (fontSize >= 14 && bold))) {
    score = 'AAA';
  }

  return score;
};

export const colorContrast: ColorContrast = function (colorHex1, colorHex2) {
  const rgb1 = convertHexToRgb(colorHex1);
  const rgb2 = convertHexToRgb(colorHex2);
  if (rgb1 && rgb2) {
    const l1 = relativeLuminance(rgb1);
    const l2 = relativeLuminance(rgb2);
    // console.log({ l1, l2 });
    return contrastRatio(l1, l2);
  }
  return false;
};
