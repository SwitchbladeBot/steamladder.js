module.exports = {
  extends: 'standard-with-typescript',
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 0
  },
  parserOptions: {
    project: './tsconfig.json'
  }
}
