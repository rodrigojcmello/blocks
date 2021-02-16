import { Color } from './origins/types';

export interface ClosestColor extends Color {
  distance: number;
}

export type FindColorName = (HEX: string) => ClosestColor | false;
