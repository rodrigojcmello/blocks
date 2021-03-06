import { capitalize } from './utils';

describe('capitalize text', () => {
  test('first letter', () => {
    expect(capitalize('text')).toBe('Text');
    expect(capitalize('text text')).toBe('Text text');
  });

  test('preserve case', () => {
    expect(capitalize('texT', { preserveCase: true })).toBe('TexT');
    expect(capitalize('teXt tExT', { preserveCase: true })).toBe('TeXt TExT');
  });

  test('1.1', () => {
    expect(capitalize('  --- ____ hello --  woRd -   __  ')).toBe('Hello Word');
  });
  test('1.1.1', () => {
    expect(capitalize('  hiiiii  ', { cleanRepeated: ['i'] })).toBe('Hi');
    expect(capitalize('  hIII  ', { cleanRepeated: ['i'] })).toBe('Hi');
    expect(capitalize('  hHIIIIII  ', { cleanRepeated: ['h', 'i'] })).toBe(
      'Hi'
    );
  });
  test('2', () => {
    expect(capitalize('first name')).toBe('First Name');
  });
  test('3', () => {
    expect(capitalize("I'm a hEro")).toBe("I'm a Hero");
  });
  test('3.1', () => {
    expect(capitalize('hello_word')).toBe('Hello Word');
  });
  test('4', () => {
    expect(capitalize('check-in and check-out')).toBe('Check-in and Check-out');
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
});
