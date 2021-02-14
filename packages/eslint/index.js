module.exports = {
  env: {
    node: true,
  },
  extends: [
    // https://www.npmjs.com/package/eslint-config-airbnb-base
    'airbnb-base',

    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'plugin:unicorn/recommended',

    // https://github.com/prettier/eslint-plugin-prettier
    'plugin:prettier/recommended',
  ],
  plugins: ['only-error'],
  rules: {
    /**
     * Prettier follows double quotes by default, but the Airbnb style guide
     * recommends single quotes. The airbnb rule will be maintained since it is
     * our chosen style guide
     * @see {@link https://github.com/airbnb/javascript#strings}
     * @see {@link https://prettier.io/docs/en/options.html#quotes}
     * @see {@link https://github.com/prettier/eslint-plugin-prettier#options}
     */
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true,
        es2020: true,
        jest: true,
        node: false,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        // EcmaScript and React
        'airbnb',
        'airbnb/hooks',
        'plugin:unicorn/recommended',

        // Test
        'plugin:jest-dom/recommended',

        // TypeScript
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',

        // Prettier
        'plugin:prettier/recommended',
        'prettier/react',
        'prettier/@typescript-eslint',
      ],

      rules: {
        //----------------------------------------------------------------------
        // RECOMMENDATIONS
        //----------------------------------------------------------------------

        'max-lines': 'error',
        'no-restricted-syntax': 'off',

        //----------------------------------------------------------------------
        // CONFLICTS
        //----------------------------------------------------------------------

        /**
         * This rule is disabled due to the "unicorn/prefer-regexp-test" rule
         * that deals with the same issue. Since this is not an exclusive rule
         * in the context of TypeScript, but of EcmaScript, we gave preference
         * to Unicorn
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-regexp-test.md}
         * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md}
         */
        '@typescript-eslint/prefer-regexp-exec': 'off',

        /**
         * This rule was originally created to guarantee the use of components
         * in JSX files, but because we adopt TypeScript as a standard this rule
         * needs to be adjusted for TSX
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md}
         * @see {@link https://www.typescriptlang.org/docs/handbook/jsx.html}
         */
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.tsx'],
          },
        ],

        /**
         * The idea here is to keep the kebab case as standard as recommended by
         * Unicorn, except for React components that need to be pascal case
         * @see {@link https://github.com/airbnb/javascript/tree/master/react#naming }
         * @see {@link https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md}
         * @see {@link https://stackoverflow.com/questions/2103596/regex-that-matches-camel-and-pascal-case}
         */
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              kebabCase: true,
            },
            ignore: ['^(?:[A-Z][a-z]+)+.tsx$'],
          },
        ],

        'unicorn/prevent-abbreviations': 'off',

        //----------------------------------------------------------------------
        // React
        //----------------------------------------------------------------------

        /**
         * These PropTypes related rules are disabled in favor of using TypeScript
         * @see {@link https://reactjs.org/docs/static-type-checking.html}
         * @see {@link https://reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper}
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md}
         */
        'react/prop-types': 'off',
        'react/require-default-props': 'off',

        /**
         * In the EcmaScript context this rule makes a lot of sense, since you
         * are not sure what exists in props, however with TypeScript this is
         * different, you know exactly the type of that props helping the code
         * readability
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md}
         * @see {@link https://www.typescriptlang.org/docs/handbook/interfaces.html}
         */
        'react/jsx-props-no-spreading': 'off',

        //----------------------------------------------------------------------

        'import/prefer-default-export': 'off',

        'react/react-in-jsx-scope': 'off',
        'import/extensions': [
          'error',
          {
            extensions: ['.ts', '.tsx'],
          },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['**/*.test.tsx', '**/setupTests.ts'],
          },
        ],
      },
    },
  ],
};
