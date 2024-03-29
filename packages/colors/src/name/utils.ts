import { Capitalize } from './types';

function replaceAt(string: string, index: number, replacement: string): string {
  if (index >= string.length) {
    return string.valueOf();
  }

  return (
    string.slice(0, Math.max(0, index)) +
    replacement +
    string.slice(Math.max(0, index + 1))
  );
}

function execAll(string: string, regex: RegExp): RegExpExecArray[] | null {
  if (!regex.global) {
    console.error(
      'RegExp must have the global flag to retrieve multiple results.'
    );
  }
  const results = [];
  let match: RegExpExecArray | null;
  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(string))) {
    results.push(match);
  }
  // eslint-disable-next-line unicorn/no-null
  if (results.length === 0) return null;
  return results;
}

const prefixHyphen = ['all', 'self', 'pre', 'ex'];

const articles = ['a', 'an', 'the'];
const conjunctions = ['for', 'and', 'nor', 'but', 'or', 'yet', 'so'];

/**
 * @see {@link https://dictionary.cambridge.org/grammar/british-grammar/prepositions}
 */
const preposition = [
  'at',
  'as',
  'by',
  'down',
  'from',
  'in',
  'into',
  /**
   * like is ignored because it is not possible to differentiate if its use is
   * as a preposition or verb
   */
  // 'like'
  'near',
  'of',
  'off',
  'on',
  'onto',
  'out',
  'over',
  'past',
  'than',
  'to',
  'up',
  'upon',
  'via',
  'with',
];
const abbreviations = ['w/'];
const romanceLanguagesWords = ['de'];

const AlwaysLowerCase = [
  ...articles,
  ...conjunctions,
  ...preposition,
  ...abbreviations,
  ...romanceLanguagesWords,
];

/**
 * @see {@link https://docs.microsoft.com/en-us/style-guide/capitalization}
 * @param text
 * @param config
 */

export const capitalize: Capitalize = function (text, config) {
  const firstWord = config?.firstWord ?? false;
  const preserveCase = config?.preserveCase ?? false;
  const preserveHyphen = config?.preserveHyphen ?? true;
  const removeDuplicate = config?.removeDuplicate ?? [' ', '-', '_'];
  const wordSeparators = config?.wordSeparators ?? [' ', '-', '_'];
  const defaultWordSeparator =
    config?.replaceConsecutiveWordSeparatorsBySpace ?? true;
  // const abbreviations = config?.abbreviations ?? [];
  const exceptionWords = new Set(config?.exceptionWords ?? AlwaysLowerCase);

  let word: string;

  // Preserve Case
  if (preserveCase) {
    word = text;
  } else {
    const preserveI = execAll(text, /I[\s']/g);
    word = text.toLowerCase();
    if (preserveI) {
      for (const { index } of preserveI) {
        word = replaceAt(word, index, word[index].toUpperCase());
      }
    }
  }

  // Remove duplicate characters
  for (const repeatedChar of removeDuplicate) {
    word = word
      .replace(new RegExp(`${repeatedChar}+`, 'gi'), repeatedChar)
      .trim();
  }

  if (!firstWord) {
    if (wordSeparators.length > 0) {
      // Replaces separators to space
      if (defaultWordSeparator) {
        word = word.replace(new RegExp(`[${['_'].join('|')}]`, 'gi'), ' ');
      }

      word = preserveHyphen
        ? word.replace(/(\s-|-\s)+/g, ' ').replace(/(\s-|-\s)+/g, ' ')
        : word.replace(/-+/g, ' ');

      word = word.replace(/\s+/gi, ' ');

      // Remove duplicate spaces

      const hyphenPosition = execAll(word, new RegExp('-', 'g'));
      // const separatorPosition = {};
      // for (const separatorElement of wordSeparators) {
      //   // @ts-ignore
      //   separatorPosition[separatorElement] = execAll(
      //     word,
      //     new RegExp(`${separatorElement}`, 'g')
      //   );
      // }

      word = word
        .split(/\s|-/)
        .map((w) =>
          capitalize(w, {
            wordSeparators: [],
            removeDuplicate: [],
            preserveCase: true,
          })
        )
        .join(' ');

      if (hyphenPosition) {
        for (const hyphenPositionElement of hyphenPosition) {
          word = replaceAt(word, hyphenPositionElement.index, '-');
        }
      }

      return (word.charAt(0).toUpperCase() + word.slice(1)).trim();
    }
    if (exceptionWords.has(word.toLowerCase())) {
      return word;
    }
    if (/^[a-z]'[a-z]{2}/i.test(word)) {
      return word.slice(0, 3).toUpperCase() + word.slice(3);
    }
  }
  return (word.charAt(0).toUpperCase() + word.slice(1)).trim();
};

export const formatColorName = function (colorName: string): string {
  return capitalize(colorName.replace(/w\//gi, 'with').trim());
};

export const formatToken = function (token: string): string {
  return token
    .toLowerCase()
    .replace(/(\s+|-+|')/g, '-')
    .replace(/^-|-$/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '');
};
