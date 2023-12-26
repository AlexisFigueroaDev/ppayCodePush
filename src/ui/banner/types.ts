import { IPressableProps } from 'native-base';

import { colors } from '../../theme/foundations/colors';
import { Level } from '../badge/types';
import { IllustrationsProps } from '../illustrations/types';

export const valueBannerBgColorBy = {
  white: colors.backgrounds[0],
  light: colors.backgrounds[20],
  lighter: colors.backgrounds[40],
  dark: colors.backgrounds[60],
  darker: colors.backgrounds[80],
};

type ValueBannerBgColorBy = typeof valueBannerBgColorBy;
type ValueBannerBgColorKeys = keyof ValueBannerBgColorBy;

export interface ValueBannerProps {
  title: string;
  label: string;
  badgeLabel?: string;
  buttonText: string;
  buttonOnClick?: () => void;
  variant?: ValueBannerBgColorKeys;
  ilustration?: IllustrationsProps['name'];
  testID: string;
}
export interface MiniBannerLevelProps {
  levelCode: Level;
  text: string;
  bgColor?: IPressableProps['bgColor'];
  onPress?: () => void;
  testID: string;
}

export interface MiniBannerProps {
  label: string;
  buttonText: string;
  buttonOnClick?: () => void;
  testID: string;
}
