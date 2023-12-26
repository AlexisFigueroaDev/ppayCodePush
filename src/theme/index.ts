import { extendTheme } from 'native-base';

import { components } from './components';
import { colors } from './foundations/colors';
import { fontConfig, fonts } from './foundations/font';
import { scaleSizes } from './foundations/sizes';

export const customTheme = extendTheme({
  colors,
  components,
  fontConfig,
  fonts,
  sizes: scaleSizes,
});

export type CustomThemeType = typeof customTheme;
