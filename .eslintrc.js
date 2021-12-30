module.exports = {
  root: true,
  extends: ['eslint:recommended', '@react-native-community', 'prettier'],
  rules: {
    'no-undef': 2,
    'no-unused-vars': 1,
    'prettier/prettier': 0,
    'react-hooks/exhaustive-deps': 1,
  },
};
