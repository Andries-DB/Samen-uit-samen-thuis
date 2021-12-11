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
    // If u want to delete console.log easily, u need to put warn instead off 'off'
    'no-console': 'off',
    'no-param-reassign': 0,
  },
};
