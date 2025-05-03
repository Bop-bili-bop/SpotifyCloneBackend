// eslint.config.js
// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: ['eslint.config.js', 'dist/**'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.json'],
      },
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  {
    rules: {
      // NestJS-specific rule relaxations and recommendations
      '@typescript-eslint/no-explicit-any': 'off', // NestJS uses `any` sometimes, especially for dynamic modules or metadata
      '@typescript-eslint/no-floating-promises': 'warn', // Helps catch unhandled async issues
      '@typescript-eslint/no-unsafe-argument': 'warn', // Be cautious, but don't error

      // Optional stricter rules if you want to tighten code quality:
      // '@typescript-eslint/explicit-function-return-type': 'warn',
      // '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
);
