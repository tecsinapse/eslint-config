import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from 'eslint-plugin-react'
import neostandard from 'neostandard'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import pluginJs from '@eslint/js'
import globals from 'globals'

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    {
        files: ['**/*.{js,ts,jsx,tsx}'],
        ...pluginReact.configs.flat.recommended,
        ...pluginReact.configs.flat['jsx-runtime'],
        languageOptions: {
            ...pluginReact.configs.flat.recommended.languageOptions,
            globals: globals.browser
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...neostandard({ noStyle: true }), 
    {
        files: ['**/**/*.{js,ts,jsx,tsx}'],
        plugins: {
          'react-hooks': pluginReactHooks
        },
        rules: {
          ...pluginReactHooks.configs.recommended.rules
        }
    },
    {
        rules: {
          '@typescript-eslint/no-unused-vars': 'warn',
          '@typescript-eslint/no-explicit-any': 'warn',
          'no-unused-vars': 'warn',
          'react/jsx-handler-names': 'off'
        }
    },
    eslintConfigPrettier
];
