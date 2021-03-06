import { Capitalize } from './types';

const articles = ['a', 'an', 'the'];
const conjunctions = ['and', 'but', 'for', 'or'];
const preposition = ['at', 'with', 'of', 'in'];
const abbreviations = ['w/'];
const romanceLanguagesWords = ['de'];

const exceptionWordsDefault = [
  ...articles,
  ...conjunctions,
  ...preposition,
  ...abbreviations,
  ...romanceLanguagesWords,
];

export const capitalize: Capitalize = function (text, config) {
  const justFirstLetter = config?.justFirstLetter ?? false;
  const preserveCase = config?.preserveCase ?? false;
  const cleanRepeated = config?.cleanRepeated ?? [' ', '-', '_'];
  const separator = config?.separator ?? [' ', '-', '_'];
  // const abbreviations = config?.abbreviations ?? [];
  const exceptionWords = new Set(
    config?.exceptionWords ?? exceptionWordsDefault
  );

  // Preserve Case
  let word = preserveCase ? text : text.toLowerCase();

  // Remove repeated characters
  for (const repeatedChar of cleanRepeated) {
    word = word
      // .toLowerCase()
      .replace(new RegExp(`${repeatedChar}+`, 'gi'), repeatedChar)
      .trim();
  }

  if (!justFirstLetter) {
    if (separator.length > 0) {
      for (const separatorElement of separator) {
        word = word
          .split(separatorElement)
          .map((w) =>
            capitalize(w, {
              separator: [],
              cleanRepeated: [],
              preserveCase: false,
            })
          )
          .join(separatorElement);
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    if (exceptionWords.has(word.toLowerCase())) {
      return word;
    }
    if (word.charAt(1) === "'" && word.length > 3) {
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
