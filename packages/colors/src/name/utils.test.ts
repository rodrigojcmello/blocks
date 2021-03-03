import { capitalize } from './utils';

describe('capitalize text', () => {
  test('1', () => {
    expect(capitalize('text')).toBe('Text');
  });
  test('2', () => {
    expect(capitalize('name name', true)).toBe('Name Name');
  });
  test('3', () => {
    expect(capitalize("I'm a hEro", true)).toBe("I'm a Hero");
  });
  test('4', () => {
    expect(capitalize('check-in', true)).toBe('Check-in');
  });
  test('5', () => {
    expect(capitalize('the clock', true)).toBe('The Clock');
  });
  test('6', () => {
    expect(capitalize('rodrigo josé carvalho de mello', true)).toBe(
      'Rodrigo José Carvalho de Mello'
    );
  });
});
