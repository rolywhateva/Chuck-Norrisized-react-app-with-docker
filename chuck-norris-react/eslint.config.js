import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import  prettierPlugin from 'eslint-plugin-prettier';
export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      //  ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      'plugin:prettier/recommended',
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,
      ...prettierPlugin,
      {
        languageOptions: {
          ecmaVersion: 2020,
          globals: globals.browser,
          parserOptions: {
            sourceType: 'module',
            ecmaVersion: 'latest',
            projectService: true,
            tsconfigRootDir: import.meta.dirname
          }
        }
      }
    ],
    files: ['**/*.{ts,tsx}'],

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false
        }
      ],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      "prettier/prettier": [
        "error"
      ],
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Packages `react` related packages come first.
            ['^react', '^@?\\w'],
            ['^(@|hooks)(/.*|$)'],
            ['^(@|models)(/.*|$)'],

            ['^(@|ui)(/.*|$)'],
            // Internal packages.
            ['^(@|components)(/.*|$)'],

            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['^.+\\.?(css)$']
          ]
        }
      ]
    }
  }
);
