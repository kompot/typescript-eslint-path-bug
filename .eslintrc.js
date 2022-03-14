const tsconfig = require('./tsconfig.eslint.json');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  ignorePatterns: tsconfig.exclude || [],
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended'],
};
