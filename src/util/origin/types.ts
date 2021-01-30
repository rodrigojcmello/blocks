import { HSLType, RGBType } from '../color';

export interface Origin {
  name: string;
  code?: string;
}

export interface Color {
  name: string;
  token: string;
  hex: string;
  rgb: RGBType;
  hsl: HSLType;
  origin: Origin;
}
