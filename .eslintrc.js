module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    // If u want to delete console.log easily, u need to put 'warn' instead 'off'
    'no-console': 'warn',
    'no-useless-constructor': 'off',
    'no-param-reassign': 0,
    'no-restricted-globals': ['error', 'event', 'fdescribe'],

  },
};
