import { validateHexColor } from '.';

describe('validate hexadecimal format', () => {
  test('length', () => {
    expect(validateHexColor('#FFF')).toBeTruthy();
    expect(validateHexColor('#FFFF')).toBeTruthy();
    expect(validateHexColor('#FFFFF')).toBeFalsy();
    expect(validateHexColor('#FFFFFF')).toBeTruthy();
    expect(validateHexColor('#FFFFFFF')).toBeFalsy();
    expect(validateHexColor('#FFFFFFFF')).toBeTruthy();
    expect(validateHexColor('#FFFFFFFFF')).toBeFalsy();
  });

  test('prefix', () => {
    expect(validateHexColor('FFFFFF')).toBeTruthy();
    expect(validateHexColor('0xFFFFFF')).toBeTruthy();
    expect(validateHexColor('#FFFFFF')).toBeTruthy();
  });

  test('letters [a-f]', () => {
    expect(validateHexColor('#ZZZZZZ')).toBeFalsy();
    expect(validateHexColor('#ggg')).toBeFalsy();
    expect(validateHexColor('#FfFY')).toBeFalsy();
  });

  test('case insensitive', () => {
    expect(validateHexColor('#FFFfff')).toBeTruthy();
    expect(validateHexColor('#6Fd600')).toBeTruthy();
    expect(validateHexColor('#8000Ff')).toBeTruthy();
  });

  // describe('wrong parameter', () => {
  //   test('number', () => {
  //     // @ts-ignore
  //     expect(validateHexColor([1, 2, 3])).toBeFalsy();
  //     // @ts-ignore
  //     expect(validateHexColor({})).toBeFalsy();
  //     // @ts-ignore
  //     // eslint-disable-next-line @typescript-eslint/no-empty-function
  //     expect(validateHexColor(() => {})).toBeFalsy();
  //     // @ts-ignore
  //     expect(validateHexColor()).toBeFalsy();
  //   });
  // });
});
