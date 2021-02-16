import { RGB } from '../../rgb/types';
import { HSL } from '../../hsl/types';

export interface Origin {
  name: string;
  code?: string;
}

export interface Color {
  name: string;
  token: string;
  hex: string;
  rgb: RGB;
  hsl: HSL;
  origin: Origin;
}
