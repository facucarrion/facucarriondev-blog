module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['standard', 'plugin:astro/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['astro', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'multiline-ternary': 'off',
    'space-before-function-paren': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: [
    '**/*.html',
    '**/*.png',
    '**/*.jpg',
    '**/*.svg',
    '**/*.webp',
    '**/*.css',
    '**/*.json'
  ]
}
