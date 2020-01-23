module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks'],
  rules: {
    'no-restricted-syntax': 0,
    'no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/forbid-prop-types': [0, {forbid: []}],
    'react/jsx-props-no-spreading': 0,
    'import/extensions': [1, 'never', {svg: 'always'}],
    'import/no-unresolved': [
      2,
      {ignore: ['@components', '@assets', '@lib', '@context', 'test-utils']},
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'react/state-in-constructor': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
  env: {
    jest: true,
    browser: true,
  },
};
