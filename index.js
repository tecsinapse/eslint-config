module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  extends: [
    'airbnb',
    'plugin:meteor/recommended',
    'prettier',
    'prettier/react',
    'react-app',
    'plugin:import/errors',
  ],
  plugins: ['react', 'import'],
  rules: {
    //using prettier
    indent: 'off',
    //using prettier
    'react/jsx-indent': 'off',
    //using prettier
    'react/jsx-indent-props': 'off',
    'react/prop-types': 'off',
    'no-confusing-arrow': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-space-before-closing': 'off',
    'react/forbid-prop-types': [
      2,
      {
        forbid: ['any', 'array'],
        checkContextTypes: false,
        checkChildContextTypes: false,
      },
    ],
    'react/jsx-tag-spacing': 'off',
    'max-len': 'off',
    'linebreak-style': ['error', 'unix'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    //it is not working correctly with ternary operator
    'react/jsx-closing-bracket-location': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-default': 'off',
    'no-underscore-dangle': 'off',
    'meteor/audit-argument-checks': 'off',
    'no-plusplus': 'off',
    'arrow-parens': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'time', 'timeEnd'],
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: false,
      },
    ],
    'meteor/eventmap-params': [
      'error',
      {
        eventParamName: 'event',
        templateInstanceParamName: 'instance',
      },
    ],
    'meteor/template-names': ['off'],
  },
  settings: {
    'import/resolver': 'meteor',
  },
};
