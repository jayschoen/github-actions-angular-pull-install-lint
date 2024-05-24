const { typescript } = require('@typescript-eslint/eslint-plugin');
const { configs: angularEslint } = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');

module.exports = [
  {
    files: ['**/*.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      createDefaultProgram: true,
    },
    plugins: {
      '@typescript-eslint': typescript,
      '@angular-eslint': angularEslint,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@angular-eslint/recommended',
    ],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        },
      ],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
  {
    files: ['**/*.html'],
    parser: '@angular-eslint/template-parser',
    plugins: {
      '@angular-eslint/template': angularTemplate,
    },
    extends: ['plugin:@angular-eslint/template/recommended'],
    rules: {
      'max-len': ['error', { code: 140 }],
    },
  },
];
