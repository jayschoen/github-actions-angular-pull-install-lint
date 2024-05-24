const { typescript } = require('@typescript-eslint/eslint-plugin');
const { configs: angularEslint } = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');

module.exports = [
  {
    ignores: ['projects/**/*'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      '@angular-eslint': angularEslint,
    },
    rules: {
      ...typescript.recommended.rules,
      ...angularEslint.recommended.rules,
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
    plugins: {
      '@angular-eslint/template': angularTemplate,
    },
    languageOptions: {
      parser: '@angular-eslint/template-parser',
    },
    rules: {
      ...angularTemplate.recommended.rules,
      'max-len': ['error', { code: 140 }],
    },
  },
];