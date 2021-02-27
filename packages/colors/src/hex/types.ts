import { HexColor, HSL, RGB } from '../types';

export type ValidateHexColor = (hexColor: HexColor) => boolean;

export type ConvertHexToRgb = (hexColor: HexColor) => RGB | false;

export type ConvertHexToHsl = (hexColor: HexColor) => HSL | false;

export type RemoveHexPrefix = (hex: HexColor) => string;
