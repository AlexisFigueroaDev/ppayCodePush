import { ReactElement, ReactNode } from 'react';

import { IBoxProps } from 'native-base';

import { Level } from '../badge';
import { IconProps, KeyTextIcons, KeySizes } from '../icon/types';
import { KeyTextColors, Variants } from '../text/types';

const DISABLED_BADGE = 'disabled';
const DANGER_BADGE = 'danger';
const WARNING_BADGE = 'warning';
const NEWS_BADGE = 'news';
const NEWS_BADGE_BUTTON = 'news-button';
const NEWS_DARKER_BADGE = 'news-darker';
const INFO_BADGE = 'info';

type VariantKey =
  | typeof DISABLED_BADGE
  | typeof DANGER_BADGE
  | typeof NEWS_BADGE
  | typeof WARNING_BADGE
  | typeof INFO_BADGE
  | typeof NEWS_DARKER_BADGE
  | typeof NEWS_BADGE_BUTTON;

export interface BaseButtonProps {
  onPress: () => void;
  testID: string;
}

export interface SolidButtonProps extends BaseButtonProps {
  children: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'fixed-box';
  icon?: KeyTextIcons;
  size: Sizes;
  isDisabled?: boolean;
}

export interface InCardProps extends BaseButtonProps {
  label: string;
  icon?: IconProps['name'];
}

export interface VariableWidthAlphaButtonProps extends BaseButtonProps {
  children: string;
  size?: 'small' | 'medium';
}

export interface InfoButtonProps extends BaseButtonProps {
  name?: string;
  title?: string;
  text: string;
  uri?: string;
  lvl?: Level;
  isLoading?: boolean;
}

type ButtonStatus = 'solid' | 'dashed';
export const buttonCardColors: Record<ButtonStatus, KeyTextColors> = {
  solid: 'textDark',
  dashed: 'textLighter',
};

export interface ButtonCardProps extends BaseButtonProps {
  children: string;
  icon?: KeyTextIcons;
  badgeText?: string;
  variant?: ButtonStatus;
  isDisabled?: boolean;
  badgeVariant?: VariantKey;
  isLoading?: boolean;
}

export interface SkeletonButtonCardProps {
  width?: IBoxProps['width'];
}

export interface ServiceCardsProps {
  title: string;
  icon: KeyTextIcons;
  badge: boolean;
  onPress: () => void;
}
export interface ButtonCardGridProps extends ServiceCardsProps {
  data: ButtonCardProps[];
  children: (item: ButtonCardProps) => ReactElement;
  keyExtractor: (item: ButtonCardProps, index: number) => string;
  itemsPerRow: number;
}

export interface IconButtonProps extends BaseButtonProps {
  name: IconProps['name'];
  color?: IconProps['color'];
  size?: Exclude<Sizes, 'fb'>;
  isDisabled?: boolean;
  variant?:
    | 'solid'
    | 'unstyled'
    | 'outline'
    | 'link'
    | 'navbar-dark'
    | 'navbar-light'
    | 'ghost'
    | 'subtle';
}

export interface VariableWithSolidButtonProps extends BaseButtonProps {
  children: string | ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'fixed-box';
  iconName?: IconProps['name'];
  isDisabled?: boolean;
  size?: Sizes;
  rightIcon?: IconProps['name'];
  minPaddingY?: boolean;
}

export interface FullWidthSolidButtonProps extends BaseButtonProps {
  children: string | ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  iconName?: IconProps['name'];
  isDisabled?: boolean;
  isLoading?: boolean;
}

export interface CreditCardButtonProps extends BaseButtonProps {
  iconName?: IconProps['name'];
  text?: string;
  lastNumbers?: number;
  isDisabled?: boolean;
}

export interface IconButtonAlphaProps extends BaseButtonProps {
  name: KeyTextIcons;
}

const SM = 'sm';
export const MD = 'md';
const LG = 'lg';
const XL = 'xl';
const XS = 'xs';
const FB = 'fb';

type Sizes =
  | typeof XS
  | typeof SM
  | typeof MD
  | typeof LG
  | typeof XL
  | typeof FB;
type BaseSizes = Exclude<Sizes, 'xs' | 'xl' | 'fb'>;

export const togglePy: Record<BaseSizes, string> = {
  [SM]: '0.5',
  [MD]: '1.5',
  [LG]: '2',
};

export const togglePx: Record<BaseSizes, string> = {
  [SM]: '2',
  [MD]: '2',
  [LG]: '3',
};

export const ToggleFontSizes: Record<BaseSizes, Variants> = {
  [SM]: 'body-xs',
  [MD]: 'body-sm',
  [LG]: 'body-md',
};

export interface ToggleProps extends BaseButtonProps {
  children: string;
  size?: BaseSizes;
  isDisabled?: boolean;
}

export const IconButtonSizes: Record<Exclude<Sizes, 'fb'>, KeySizes> = {
  [XL]: '20',
  [LG]: '20',
  [MD]: '16',
  [SM]: '12',
  [XS]: '8',
};
