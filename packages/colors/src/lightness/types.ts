import { RGB } from '../types';

export type ContrastRatio = (a: number, b: number) => number;

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
