import { U } from 'ts-toolbelt';

import { IconProps, KeyIconColors, KeyTextIcons } from '@ui/icon/types';
import { PillProps } from '@ui/pill/types';

import {
  KeyTextColors,
  BODYBOLD_LG,
  BODYBOLD_XS,
  HEADING_LG,
  HEADING_XS,
  Variants,
  TextProps,
  VariantSize,
} from '../text/types';

/* ActivityRow */

export const colorBy: Record<string, KeyTextColors> = {
  receive: 'success',
  approved: 'success',
  transfer: 'textDark',
  info: 'textDark',
  failure: 'textLighter',
  rejected: 'textLighter',
  default: 'textDark',
};

export const customSubstring = (string: string, charts: number): string =>
  string.length > charts ? string.slice(0, charts).concat('...') : string;

export interface ActivityRowProps {
  icon?: IconProps['name'];
  title: string;
  description?: string;
  descriptionColor?: KeyTextColors;
  amount?: string | number;
  date?: string;
  status?:
    | 'receive'
    | 'approved'
    | 'transfer'
    | 'pending'
    | 'failure'
    | 'rejected';
  onPress?: () => void;
  isLoading?: boolean;
  pillTitle?: string;
  pillVariant?: 'warning' | 'success' | 'info' | 'danger' | 'neutral';
  pillRightTitle?: string;
  pillRightTitleColor?: KeyTextColors;
  footerTitle?: string;
  footerDescription?: string | number;
  imgUri?: string;
  titleVariant?: Variants;
  rightIcon?: KeyTextIcons;
}

/* BlanceRow  */

export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';
export const BODY_BOLD = 'bodyBold';
export const BODY_SEMI = 'bodySemi';
export const BODY = 'body';
export const NO_PADDING_LARGE = 'no-padding-large';

export type BlanceRowVariant = typeof SMALL | typeof LARGE;

export interface BlanceRowProps {
  value: number;
  isShowAmount?: boolean;
  currency?: string;
  variant: BlanceRowVariant;
  isLoading?: boolean;
  onPress?: () => void;
}

export interface ConfigBalanceRowProps {
  containerH: string;
  numbersVariant: Variants;
  decimalVariant: Variants;
}

const config: Record<string, ConfigBalanceRowProps> = {
  small: {
    containerH: '24px',
    numbersVariant: BODYBOLD_LG,
    decimalVariant: BODYBOLD_XS,
  },
  large: {
    containerH: '48px',
    numbersVariant: HEADING_LG,
    decimalVariant: HEADING_XS,
  },
};

export const typeConfig = (
  variant: BlanceRowVariant = 'small',
): ConfigBalanceRowProps => {
  return config[variant];
};

/* SingleRow */

export type SingleRowVariant =
  | typeof SMALL
  | typeof MEDIUM
  | typeof LARGE
  | typeof NO_PADDING_LARGE;

export type SingleRowVariantTitle =
  | typeof BODY_BOLD
  | typeof BODY
  | typeof BODY_SEMI;

export interface SingleRowAmountProps {
  amount?: number;
  variantTitle?: SingleRowVariantTitle;
  withOutDecimalsAmountInt?: boolean;
}

export interface SingleRowRightTitleProps {
  rightTitle?: string;
  isRightTitleBold?: boolean;
  isTitleBold?: boolean;
  variantTitle?: SingleRowVariantTitle;
  rightTitleColor?: KeyTextColors;
  rightIconColor?: KeyIconColors;
}

interface RightPill extends Pick<PillProps, 'variant' | 'type'> {
  title: string;
}
export interface SingleRowProps {
  variant?: SingleRowVariant;
  icon?: IconProps['name'];
  iconColor?: KeyIconColors;
  title: string;
  badgeText?: string;
  rightPill?: RightPill;
  isLoading?: boolean;
  onPress?: () => void;
  textSize?: VariantSize;
  isTruncated?: boolean;
  colorAmount?: KeyTextColors;
  isBorder?: boolean;
  rightIcon?: IconProps['name'];
  textColor?: KeyTextColors;
  rightIconColor?: KeyIconColors;
  imgUri?: string;
  fallbackImage?: KeyTextIcons;
  isDisabled?: boolean;
}

export type SingleRowType = SingleRowProps &
  U.Merge<SingleRowAmountProps | SingleRowRightTitleProps>;

/* SelectRow (Checkbox and radio-button) */

type SelectRowVariant = 'radio-button' | 'checkbox';

export interface SelectRowItem {
  value: string;
  title: string;
  subtitle?: string;
  accessibilityLabel?: string;
  isDisabled?: boolean;
  isFocused?: boolean;
  isChecked?: boolean;
}

export interface RadioButtonRowsProps {
  /* Row element  */
  rows: SelectRowItem[];
  /* Onchange event to handle radio button groups entirely  */
  onChange: (value: string) => void;
  isLoading?: boolean;
  amountOfSkeletonLines?: number;
}

export interface CheckboxRowsProps
  extends Pick<SelectRowsSkeletonProps, 'amountOfLines'> {
  /* Row element  */
  rows: (SelectRowItem & { onPress?: () => void })[];
  /* Onchange event to handle checkbox group entirely  */
  isLoading?: boolean;
}

export interface SelectRowsSkeletonProps {
  variant: SelectRowVariant;
  hasSubtitle?: boolean;
  amountOfLines?: number;
}

// ** Row /

export const setVariantBy = (
  descriptionBold: boolean,
  errorMsg: boolean,
): TextProps['variant'] => {
  let variant: TextProps['variant'] = 'bodyBold-md';
  if (descriptionBold) variant = 'body-sm';
  if (errorMsg) variant = 'body-md';
  return variant;
};

export interface DoubleLineRowProps {
  leftIcon?: IconProps['name'];
  leftIconSize?: IconProps['size'];
  avatarUri?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  paddingX?: '0' | '2' | '4';
  onPress?: () => void;
  userName?: string;
  errorMsg?: string;
  descriptionBold?: boolean;
  rightIcon?: IconProps['name'];
  onPressRightIcon?: () => void;
  iconSize?: '16';
  pillVariant?: 'warning' | 'success' | 'info' | 'danger' | 'neutral';
  pillTitle?: string;
  pillType?: 'alpha' | 'solid';
  colorDescription?: KeyTextColors;
  isBorder?: boolean;
  isTitleTruncated?: boolean;
  isDescriptionTruncated?: boolean;
  descriptionNoOfLines?: number;
  highlightedTextNoOfLines?: number;
  isHighlightedTextTruncated?: boolean;
  logo?: string;
  imgUri?: string;
  isDisabled?: boolean;
}

export interface DoubleLineRowSkeletonProps {
  paddingX: '0' | '2' | '4';
}

export const WITH_ICON = 'withIcon';
export const WITHOUT_ICON = 'withoutIcon';
export const ONLY_TITLE = 'onlyTitle';

export type inCardRowVariants =
  | typeof WITH_ICON
  | typeof WITHOUT_ICON
  | typeof ONLY_TITLE;

export interface InCardRowProps {
  variant: inCardRowVariants;
  title: string;
  description?: string;
  isDisabled?: boolean;
}

export interface SingleLineRowSkeletonProps {
  variant?: SingleRowVariant;
  isBorder?: boolean;
}
