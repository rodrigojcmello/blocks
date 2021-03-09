import { capitalize } from './utils';

describe('capitalize text', () => {
  test('capitalize the first word of a sentence', () => {
    expect(capitalize('The cat is sleeping.', { firstWord: true })).toBe(
      'The cat is sleeping.'
    );
    expect(capitalize('where did I put that book?', { firstWord: true })).toBe(
      'Where did I put that book?'
    );
  });

  test('preserve case', () => {
    expect(capitalize('texT', { preserveCase: true })).toBe('TexT');
    expect(capitalize('teXt tExT text tEXT', { preserveCase: true })).toBe(
      'TeXt TExT Text TEXT'
    );
  });

  test('clean repeated separators and replace all separators by space', () => {
    expect(capitalize('  --- ____ hello --  woRd -   __  ')).toBe('Hello Word');
    expect(capitalize('__hello-word  ')).toBe('Hello Word');
  });

  test('clean repeated separators', () => {
    expect(
      capitalize('  --- ____ hello --  woRd -   __  ', {
        wordSeparators: [' '],
      })
    ).toBe('- _ Hello - Word - _');
    expect(capitalize('__hello-word  ', { wordSeparators: [' '] })).toBe(
      '_hello-word'
    );
    expect(capitalize('__ hello-word  ', { wordSeparators: [' '] })).toBe(
      '_ Hello-word'
    );
  });

  test('remove duplicate characters', () => {
    expect(capitalize('__  --  hi  --  __')).toBe('Hi');
    expect(capitalize('__  --  hiIi  --  __')).toBe('Hiii');
    expect(capitalize('hiiiii', { removeDuplicate: ['i'] })).toBe('Hi');
    expect(capitalize('hIII', { removeDuplicate: ['i'] })).toBe('Hi');
    expect(capitalize('hHIIIIII--   hi', { removeDuplicate: ['h', 'i'] })).toBe(
      'Hi Hi'
    );
    expect(
      capitalize('hHIIIIII   hi', { removeDuplicate: ['h', 'i', ' '] })
    ).toBe('Hi Hi');
  });
  test('3', () => {
    expect(capitalize("i'm a hero")).toBe("I'm a Hero");
    expect(capitalize("james o'brian")).toBe("James O'Brian");
  });
  test('3.1', () => {
    expect(capitalize('hello_word')).toBe('Hello Word');
  });
  test('4', () => {
    expect(capitalize('check-in and check-out')).toBe('Check in and Check out');
    // expect(capitalize('check-in and check-out')).toBe('Check-in and Check-out');
  });
  test('4.1', () => {
    expect(capitalize('check-in')).toBe('Check in');
  });
  test('5', () => {
    expect(capitalize('the clock')).toBe('The Clock');
  });
  test('6', () => {
    expect(capitalize('rodrigo josé carvalho de mello')).toBe(
      'Rodrigo José Carvalho de Mello'
    );
  });
  test('Preserve word separator', () => {
    expect(capitalize('check - in')).toBe('Check in');
    expect(capitalize('check-in')).toBe('Check-in');
    expect(capitalize('check_check')).toBe('Check_Check');
  });
});
