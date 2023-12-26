import { colors } from '@theme/foundations/colors';
import { KeyTextIcons, IconColors } from '@ui/icon';

import {
  InfoButtonProps,
  IconButtonAlphaProps,
  VariableWidthAlphaButtonProps,
} from '../button';

export const ICONS: { [key: string]: KeyTextIcons } = {
  error: 'ErrorFilled',
  warning: 'Alert',
  success: 'SuccessFilled',
  info: 'ClockFilled',
};

export interface FeedbackHeaderProps {
  variant: keyof Pick<
    typeof IconColors,
    'error' | 'warning' | 'success' | 'info'
  >;
}

export interface AlphaButtonProps
  extends Pick<VariableWidthAlphaButtonProps, 'onPress'> {
  text: string;
}

export interface SectionAppProps {
  infoButton?: InfoButtonProps;
  title?: string;
  iconButtonOne?: IconButtonAlphaProps;
  iconButtonTwo?: IconButtonAlphaProps;
  alphaButton?: AlphaButtonProps;
  height?: number;
}

export const SubSectionAppBGColors = {
  neutral: colors.primaryDark[10],
  white: colors.primaryDark[0],
  loyalty: colors.loyaltyTwo[20],
  success: colors.secondaryTwo[80],
} as const;

type ColorsTypeSubSectionAppBG = typeof SubSectionAppBGColors;
export type SubSectionAppBGColors = keyof ColorsTypeSubSectionAppBG;

export interface SubSectionAppProps {
  bottomBackgroundColor?: SubSectionAppBGColors;
  topBackgroundColor?: SubSectionAppBGColors;
}
