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
       * @default false
       */
      preserveCase?: boolean;

      /**
       * @default false
       */
      preserveHyphen?: boolean;

      /**
       * @default [' ', '_']
       */
      removeDuplicate?: string[];

      /**
       * @default ' '
       */
      replaceConsecutiveWordSeparatorsBySpace?: boolean;

      /**
       * @default ['the', 'a', 'an']
       */
      exceptionWords?: string[];

      /**
       * @default [' ', '-', '_']
       */
      wordSeparators?: string[];

      abbreviations?:
        | [[abbreviation: string, completeWord: string]]
        | undefined;
    }
  ): string;
}
