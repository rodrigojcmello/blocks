import { HSL, RGB } from '../types';

export type ValidateHexColor = (hexColor: string) => boolean;

export type ConvertHexToRgb = (hexColor: string) => RGB | false;

export type ConvertHexToHsl = (hexColor: string) => HSL | false;
