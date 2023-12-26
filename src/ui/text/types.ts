import { colors } from '../../theme/foundations/colors';

export const HEADING_XL = 'heading-xl';
export const HEADING_LG = 'heading-lg';
export const HEADING_MD = 'heading-md';
export const HEADING_SM = 'heading-sm';
export const HEADING_XS = 'heading-xs';
export const BODYLIGHT_LG = 'bodyLight-lg';
export const BODYLIGHT_MD = 'bodyLight-md';
export const BODYLIGHT_SM = 'bodyLight-sm';
export const BODY_LG = 'body-lg';
export const BODY_MD = 'body-md';
export const BODY_SM = 'body-sm';
export const BODY_XS = 'body-xs';
export const BODY_XXS = 'body-xxs';
export const BODYSEMI_LG = 'bodySemi-lg';
export const BODYSEMI_MD = 'bodySemi-md';
export const BODYSEMI_SM = 'bodySemi-sm';
export const BODYSEMI_XS = 'bodySemi-xs';
export const BODYSEMI_XXS = 'bodySemi-xxs';
export const BODYBOLD_LG = 'bodyBold-lg';
export const BODYBOLD_MD = 'bodyBold-md';
export const BODYBOLD_SM = 'bodyBold-sm';
export const BODYBOLD_XS = 'bodyBold-xs';
export const BODYBOLD_XXS = 'bodyBold-xxs';
export const UNDERLINE_LG = 'underline-lg';
export const UNDERLINE_MD = 'underline-md';
export const UNDERLINE_SM = 'underline-sm';
export const UNDERLINE_XS = 'underline-xs';
export const UNDERLINE_XXS = 'underline-xxs';
export const CENTER_BODY_SM = 'center-body-sm';
export const CAPS_XXS = 'caps-xxs';
export const CAPS_XS = 'caps-xs';
export const CAPS_SM = 'caps-sm';
export const CAPS_MD = 'caps-md';
export const CAPS_LG = 'caps-lg';
export const UNDERLINEBOLD_LG = 'underlineBold-lg';
export const UNDERLINEBOLD_MD = 'underlineBold-md';
export const UNDERLINEBOLD_SM = 'underlineBold-sm';
export const UNDERLINEBOLD_XS = 'underlineBold-xs';
export const UNDERLINEBOLD_XXS = 'underlineBold-xxs';

export const TextColors = {
  white: colors.primaryDark[0],
  textLighter: colors.primaryDark[60],
  textLight: colors.primaryDark[70],
  text: colors.primaryDark[80],
  textDark: colors.primaryDark[90],
  textDarker: colors.primaryDark[100],
  textDisabled: colors.primaryDark[50],
  success: colors.secondaryTwo[100],
  warning: colors.secondaryThree[100],
  error: colors.secondaryFour[80],
  info: colors.secondaryFive[80],
  primary: colors.primary[80],
  errorHight: colors.secondaryThree[80],
  errorHighest: colors.secondaryFour[80],
  veryHigh: colors.secondaryThree[120],
  disabled: colors.primaryDark[40],
  successSoft: colors.secondaryTwo[80],
  neutral: colors.primaryDark[80],
} as const;

type ColorsTypeTextColors = typeof TextColors;
export type KeyTextColors = keyof ColorsTypeTextColors;

export type Variants =
  | typeof HEADING_XL
  | typeof HEADING_LG
  | typeof HEADING_MD
  | typeof HEADING_SM
  | typeof HEADING_XS
  | typeof BODYLIGHT_LG
  | typeof BODYLIGHT_MD
  | typeof BODYLIGHT_SM
  | typeof BODY_LG
  | typeof BODY_MD
  | typeof BODY_SM
  | typeof BODY_XS
  | typeof BODY_XXS
  | typeof BODYSEMI_LG
  | typeof BODYSEMI_MD
  | typeof BODYSEMI_SM
  | typeof BODYSEMI_XS
  | typeof BODYSEMI_XXS
  | typeof BODYBOLD_LG
  | typeof BODYBOLD_MD
  | typeof BODYBOLD_SM
  | typeof BODYBOLD_XS
  | typeof BODYBOLD_XXS
  | typeof UNDERLINE_LG
  | typeof UNDERLINE_MD
  | typeof UNDERLINE_SM
  | typeof UNDERLINE_XS
  | typeof UNDERLINE_XXS
  | typeof CENTER_BODY_SM
  | typeof CAPS_XXS
  | typeof CAPS_XS
  | typeof CAPS_SM
  | typeof CAPS_MD
  | typeof CAPS_LG
  | typeof UNDERLINEBOLD_LG
  | typeof UNDERLINEBOLD_MD
  | typeof UNDERLINEBOLD_SM
  | typeof UNDERLINEBOLD_XS
  | typeof UNDERLINEBOLD_XXS;

export const FONT_MULTIPLIER = {
  max: 1.6,
  min: 1,
} as const;

export type ScaleMaxFontMultiplier =
  | typeof FONT_MULTIPLIER.min
  | 1.2
  | 1.4
  | typeof FONT_MULTIPLIER.max;

export interface TextProps {
  variant?: Variants;
  color?: KeyTextColors;
  noOfLines?: number;
  textAlign?: 'left' | 'center' | 'right';
  isTruncated?: boolean;
  maxFontMultiplier?: ScaleMaxFontMultiplier;
}

export type VariantSize = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export interface DynamicTextProps {
  text: string;
  linkColor: KeyTextColors;
  size?: VariantSize;
  onPress?: () => void;
  justifyContent?: 'flex-end' | 'center' | 'flex-start';
  maxFontMultiplier?: ScaleMaxFontMultiplier;
  boldColor?: KeyTextColors;
}
