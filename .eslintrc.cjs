module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['eslint-plugin-unused-imports', 'no-only-tests'],
  extends: [
    'eslint:recommended',
    'eslint-config-typescript',
    'eslint-config-prettier',
    'plugin:storybook/recommended'
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'no-only-tests/no-only-tests': 'error',
    'no-return-assign': ['error', 'always'],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/ban-ts-comment': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
