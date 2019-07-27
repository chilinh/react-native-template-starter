/**
 * Adds `.jsx`, `.ts` and `.tsx` as an extension, and enables JSX/TSX parsing.
 */
var jsExtensions = ['.js', '.jsx']
var tsExtensions = ['.ts', '.tsx']
var allExtensions = jsExtensions.concat(tsExtensions)

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
    '@react-native-community'
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    semi: ['error', 'never'],
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'global-require': 'off',
    'arrow-parens': ['error', 'as-needed'],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
  },
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': tsExtensions,
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
    },
  },
}
