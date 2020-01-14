module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'no-shadow': ['error', { allow: ['props'] }],
    'no-underscore-dangle': [0],
    'no-unused-vars': ['warn'],
    'no-restricted-syntax': [0],
    'jsx-a11y/label-has-associated-control': [0],
    'prettier/prettier': ['error'],
    'react/prop-types': ['error'],
    'react/jsx-filename-extension': [0],
    'react/jsx-props-no-spreading': [0],
    'react/require-default-props': [0],
    'react/react-in-jsx-scope': [0],
    'react/jsx-wrap-multilines': [
      'error',
      {
        prop: 'ignore'
      }
    ],
    'react/jsx-curly-brace-presence': [0],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/jsx-curly-newline': [0]
  },
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: '16.8.6'
    },
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.']
      }
    }
  }
};
