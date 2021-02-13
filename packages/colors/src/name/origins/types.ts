import { RGBType } from '../../rgb/types';
import { HSLType } from '../../hsl/types';

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
