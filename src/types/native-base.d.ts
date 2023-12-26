import { CustomThemeType } from '@theme/index';

declare module 'native-base' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomTheme extends CustomThemeType {}
}
