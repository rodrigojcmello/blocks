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

export type ColorShades = (hex: HEX) => false | HEX[];
