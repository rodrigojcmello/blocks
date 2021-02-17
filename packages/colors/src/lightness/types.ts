import { HEX, RGB } from '../types';

export type ContrastRatio = (L1: number, L2: number) => number;

export type ColorContrast = (
  hexColor1: string,
  hexColor2: string
) => number | false;

export type RelativeLuminance = (rgb: RGB) => number;

export type ContrastScore = (
  contrast: number,
  fontSize: number,
  bold?: boolean
) => string;

export type ScaleLightness = (
  /**
   * Hexadecimal color
   */
  hex: HEX,

  /**
   * Define whether you want a lighter or darker lightness scale
   * @default "both"
   */
  type?: 'both' | 'light' | 'dark',

  /**
   * amount of lightness scales you want
   * @default "5"
   */
  amount?: number,

  /**
   * lightness scale between 0 (white) and 100 (black)
   * @default "5"
   */
  darker?: number,

  /**
   * lightness scale between 0 (white) and 100 (black)
   * @default "95"
   */
  lighter?: number
) => HEX[] | false;
