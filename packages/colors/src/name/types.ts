export interface ClosestColor {
  name: string;
  token: string;
  hex: string;
  distance: number;
}

export type FindColorName = (HEX: string) => ClosestColor | false;
