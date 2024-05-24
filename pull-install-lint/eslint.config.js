import { typescript } from '@eslint/config';

export default [
  {
    ignores: ['projects/**/*']
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
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      '@angular-eslint': require('@angular-eslint/eslint-plugin'),
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...require('@angular-eslint/eslint-plugin').configs.recommended.rules,
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
      '@angular-eslint/template': require('@angular-eslint/eslint-plugin-template'),
    },
    languageOptions: {
      parser: '@angular-eslint/template-parser',
    },
    rules: {
      ...require('@angular-eslint/eslint-plugin-template').configs.recommended.rules,
      'max-len': ['error', { code: 140 }],
    },
  },
];