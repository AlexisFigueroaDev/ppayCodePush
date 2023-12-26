import { colors } from '../../theme/foundations/colors';
import { KeyTextColors, Variants } from '../text/types';

const XS = 'xs';
const SM = 'sm';
const MD = 'md';
const LG = 'lg';

type Sizes = typeof XS | typeof SM | typeof MD | typeof LG;

export const paddingHorizontalBy = {
  [XS]: '2',
  [SM]: '2',
  [MD]: '3',
  [LG]: '3',
};

export const textVariantBy: Record<Sizes, Variants> = {
  [XS]: 'bodyBold-xs',
  [SM]: 'bodyBold-sm',
  [MD]: 'bodyBold-md',
  [LG]: 'bodyBold-lg',
};

export const pillBgColorBy = {
  danger: colors.secondaryFour[80],
  warning: colors.secondaryThree[100],
  success: colors.secondaryTwo[80],
  neutral: colors.primaryDark[80],
  info: colors.secondaryFive[80],
  successSoft: colors.secondaryTwo[100],
};

type PillBgColorBy = typeof pillBgColorBy;
export type PillBgColorKeys = keyof PillBgColorBy;

export const pillTextColorBy: Record<PillBgColorKeys, KeyTextColors> = {
  danger: 'error',
  warning: 'warning',
  success: 'success',
  neutral: 'neutral',
  info: 'info',
  successSoft: 'success',
};

export interface PillProps {
  children: string;
  variant?: PillBgColorKeys;
  size?: Sizes;
  type?: 'alpha' | 'solid';
}
