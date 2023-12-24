module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.json', '.ts', '.tsx'],
        root: ['./src'],
      },
    ],
  ],
};
