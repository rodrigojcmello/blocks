import { convertHexToHsl, convertHexToRgb } from '../hex';
import { convertHslToHex } from '../hsl';
import {
  ColorContrast,
  ColorShades,
  ContrastRatio,
  ContrastScore,
  RelativeLuminance,
} from './types';

function lightnessRange(
  lightness = 55,
  type = 'both',
  amount = 10,
  darker = 5,
  lighter = 95
): number[] {
  const colors = [];
  if (type === 'tint' || type === 'both') {
    const lightRange = (lighter - lightness) / amount;
    for (let i = lighter; Math.round(i) > lightness; i -= lightRange) {
      colors.push(Math.round(i));
    }
  }
  colors.push(lightness);
  if (type === 'shade' || type === 'both') {
    const darkRange = (lightness - darker) / amount;
    for (
      let i = lightness - darkRange;
      Math.round(i) >= darker;
      i -= darkRange
    ) {
      colors.push(Math.round(i));
    }
  }
  return colors;
}

/**
 * gerar tons de cores para você usar em suas interfaces
 */
export const createTints2: ColorShades = function (hex) {
  const hsl = convertHexToHsl(hex);
  if (hsl) {
    return lightnessRange(hsl[2])
      .map((lightness): string | false => {
        const newHsl = hsl;
        newHsl[2] = lightness;
        return convertHslToHex(newHsl);
      })
      .filter(Boolean) as string[];
  }
  return false;
};

export const createTints: ColorShades = function (hex) {
  const hsl = convertHexToHsl(hex);
  if (hsl) {
    return lightnessRange(hsl[2], 'both')
      .map((lightness): string | false => {
        const newHsl = hsl;
        newHsl[2] = lightness;
        return convertHslToHex(newHsl);
      })
      .filter(Boolean) as string[];
  }
  return false;
};

// -----------------------------------------------------------------------------

/**
 * @see {@link https://www.w3.org/WAI/GL/wiki/Contrast_ratio}
 */
export const contrastRatio: ContrastRatio = function (L1, L2) {
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * @see {@link https://www.w3.org/WAI/GL/wiki/Relative_luminance}
 * @see {@link https://en.wikipedia.org/wiki/Rec._709#Luma_coefficients}
 */
export const relativeLuminance: RelativeLuminance = function (rgb) {
  const RsRGB = rgb[0] / 255;
  const GsRGB = rgb[1] / 255;
  const BsRGB = rgb[2] / 255;

  const R = RsRGB <= 0.03928 ? RsRGB / 12.92 : ((RsRGB + 0.055) / 1.055) ** 2.4;
  const G = GsRGB <= 0.03928 ? GsRGB / 12.92 : ((GsRGB + 0.055) / 1.055) ** 2.4;
  const B = BsRGB <= 0.03928 ? BsRGB / 12.92 : ((BsRGB + 0.055) / 1.055) ** 2.4;

  return R * 0.2126 + G * 0.7152 + B * 0.0722;
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
    const L1 = relativeLuminance(rgb1);
    const L2 = relativeLuminance(rgb2);
    return contrastRatio(L1, L2);
  }
  return false;
};
