module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
    [
      'module-resolver',
      {
        extensions: ['.json', '.ts', '.tsx'],
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@theme': './src/theme',
          '@ui': './src/ui',
          '@utils': './src/utils',
          '@modules': './src/modules',
        },
      },
    ],
  ],
};
