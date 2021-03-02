const exceptionWords = new Set(['of', 'de', 'with', 'in', 'the']);

function capitalize(word: string, all?: boolean): string {
  if (all) {
    return word
      .split(' ')
      .map((w) => capitalize(w))
      .join(' ');
  }
  if (exceptionWords.has(word.toLowerCase())) {
    return word.toLowerCase();
  }
  if (word.charAt(1) === "'") {
    return word.slice(0, 3).toUpperCase() + word.slice(3);
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const formatColorName = function (colorName: string): string {
  return capitalize(
    colorName
      .replace(/(-)+/g, ' ')
      .replace(/\s+/g, ' ')
      .replaceAll('w/', 'with')
      .trim(),
    true
  );
};

export const formatToken = function (token: string): string {
  return token
    .toLowerCase()
    .replaceAll(' ', '-')
    .replaceAll("'", '-')
    .replace(/(-)+/g, '-')
    .replace(/^(-)/g, '')
    .replace(/(-)$/g, '');
};
