import { HexColor } from '../types';

export interface ClosestColor {
  name: string;
  token: string;
  hex: string;
  distance: number;
}

export type FindColorName = (hexColor: HexColor) => ClosestColor | false;

export interface Capitalize {
  (
    text: string,
    config?: {
      /**
       * @default false
       */
      firstWord?: boolean;

      /**
       * If true, lower case will not be applied to the rest of the text
       * @default false
       */
      preserveCase?: boolean;

      /**
       * @default [' ', '_']
       */
      removeDuplicate?: string[];

      /**
       * @default ['-', '_']
       */
      replaceBySpace?: string[];

      /**
       * @default ['the', 'a', 'an']
       */
      exceptionWords?: string[];

      /**
       * @default [' ', '-', '_']
       */
      separator?: string[];

      abbreviations?:
        | [[abbreviation: string, completeWord: string]]
        | undefined;
    }
  ): string;
}
