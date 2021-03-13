import { capitalize } from './utils';

describe('capitalize text', () => {
  test('capitalize the first word of a sentence', () => {
    expect(capitalize('the cat is sleeping.', { firstWord: true })).toBe(
      'The cat is sleeping.'
    );
    expect(capitalize('where did I put that book?', { firstWord: true })).toBe(
      'Where did I put that book?'
    );
  });

  test('handle pronoun I', () => {
    expect(capitalize("i'm tall")).toBe("I'm Tall");
    expect(capitalize('finally i did it')).toBe('Finally I Did It');
  });

  describe('mixed upper and lower case letters', () => {
    test('first letter in uppercase and lowercase rest', () => {
      expect(capitalize('hElLO')).toBe('Hello');
      expect(capitalize('hoW aRE yOU?')).toBe('How Are You?');
    });

    test('preserve text’s case', () => {
      expect(capitalize('hElLO', { preserveCase: true })).toBe('HElLO');
      expect(capitalize('hoW aRE yOU?', { preserveCase: true })).toBe(
        'HoW ARE YOU?'
      );
    });
  });

  test('clean repeated separators and replace all separators by space', () => {
    expect(capitalize('  --- ____ hello  --  woRd -   __  ')).toBe(
      'Hello Word'
    );
    expect(capitalize('__hello--word  ')).toBe('Hello-word');
  });

  describe('hyphenated words', () => {
    test('uppercase after hyphen', () => {
      expect(capitalize('front-end')).toBe('Front-End');
      expect(capitalize('e-mail')).toBe('E-Mail');
      expect(capitalize('a hard-working man')).toBe('A Hard-Working Man');
    });

    test('hyphen + exception word', () => {
      expect(capitalize('check-in')).toBe('Check-in');
      expect(capitalize('check-out')).toBe('Check-out');
    });

    // test('prefix + hyphen', () => {
    //   expect(capitalize('ex-husband')).toBe('Ex-husband');
    //   expect(capitalize('self-control')).toBe('Self-control');
    //   expect(capitalize('all-inclusive')).toBe('All-inclusive');
    // });
  });

  // test('clean repeated separators', () => {
  //   expect(
  //     capitalize('  --- ____ hello --  woRd -   __  ', {
  //       wordSeparators: [' '],
  //     })
  //   ).toBe('Hello Word');
  //   expect(
  //     capitalize('  --- ____ hello --  woRd -   __  ', {
  //       wordSeparators: [],
  //     })
  //   ).toBe('  --- ____ hello --  woRd -   __  ');
  //   expect(capitalize('__hello-word  ', { wordSeparators: [' '] })).toBe(
  //     '_hello-word'
  //   );
  //   expect(capitalize('__ hello-word  ', { wordSeparators: [' '] })).toBe(
  //     '_ Hello-word'
  //   );
  // });

  test('remove duplicate characters', () => {
    expect(capitalize('check--  in')).toBe('Check in');
    expect(capitalize('check--in')).toBe('Check-in');
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
  test('5', () => {
    expect(capitalize('the clock')).toBe('The Clock');
  });
  test('6', () => {
    expect(capitalize('rodrigo josé carvalho de mello')).toBe(
      'Rodrigo José Carvalho de Mello'
    );
  });
});
