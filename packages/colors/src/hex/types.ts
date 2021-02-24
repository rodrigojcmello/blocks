import { HEX, HSL, RGB } from '../types';

export type ValidateHexColor = (hexColor: string) => boolean;

export type ConvertHexToRgb = (hexColor: string) => RGB | false;

export type ConvertHexToHsl = (hexColor: string) => HSL | false;

export type CleanHex = (hex: HEX) => string;
