const articles = ['a', 'an', 'the'];
const conjunctions = ['and', 'but', 'for', 'or'];
const preposition = ['at', 'with', 'of', 'in'];
const others = ['de', 'w/'];

const exceptionWords = new Set([
  ...articles,
  ...conjunctions,
  ...preposition,
  ...others,
]);

export function capitalize(text: string, title?: boolean): string {
  const lowerCase = title ? text.toLowerCase() : text;

  if (title) {
    const word = lowerCase
      .split(' ')
      .map((w) => capitalize(w))
      .join(' ');

    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  if (exceptionWords.has(lowerCase.toLowerCase())) {
    return lowerCase;
  }
  if (lowerCase.charAt(1) === "'" && lowerCase.length > 3) {
    return lowerCase.slice(0, 3).toUpperCase() + lowerCase.slice(3);
  }
  return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}

export const formatColorName = function (colorName: string): string {
  return capitalize(
    colorName
      .replace(/-+/g, '-')
      .replace(/\s+/g, ' ')
      .replace(/w\//gi, 'with')
      .trim(),
    true
  );
};

export const formatToken = function (token: string): string {
  return token
    .toLowerCase()
    .replace(/(\s+|-+|')/g, '-')
    .replace(/^-|-$/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '');
};
