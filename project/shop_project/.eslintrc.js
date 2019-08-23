module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ["error", { "code": 180 }],
    'linebreak-style': ["off"],
    'arrow-parens': [2, "as-needed", { "requireForBlockBody": true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
