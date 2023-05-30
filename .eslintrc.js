module.exports = {
    extends: [
        'plugin:react/recommended',
        'airbnb',
      ],
    env: {
      browser: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      semicolon: ['error', 'never'],
    },
  }