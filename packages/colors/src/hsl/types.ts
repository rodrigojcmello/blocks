import { HSL, RGB } from '../types';

export type ValidateHsl = (hsl: HSL) => boolean;

export type ConvertHslToRgb = (hsl: HSL) => RGB | false;

export type ConvertHslToHex = (hsl: HSL) => string | false;
