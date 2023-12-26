import { IconProps, KeyIconColors } from '@ui/icon/types';
import { SingleRowVariantTitle } from '@ui/row/type';
import { KeyTextColors, VariantSize } from '@ui/text/types';

export const ACC_VARIANTS = {
  STANDARD: 'standard',
  IN_CARD: 'in-card',
} as const;

export interface AccordionProps {
  onPressLabel?: () => void;
  title: string;
  icon?: IconProps['name'];
  amount?: number;
  isLoading?: boolean;
  dataAccordion?: Array<DataAccordion>;
  label?: string;
  textBody?: string;
  isIconRight?: boolean;
  variantTitle?: SingleRowVariantTitle;
  isShowDivider?: boolean;
  disabled?: boolean;
  textSize?: VariantSize;
  textColorTitle?: KeyTextColors;
  iconColorRight?: KeyIconColors;
  colorAmount?: KeyTextColors;
  iconColor?: KeyIconColors;
  iconOpen?: IconProps['name'];
  iconClose?: IconProps['name'];
  // TODO: REFACTOR TO TYPE type = 'standard' | 'in-card'
  variant?: (typeof ACC_VARIANTS)[keyof typeof ACC_VARIANTS];
}

export interface DataAccordion {
  left: string;
  right: string;
}

export interface Colorsprops {
  colorAmount: KeyTextColors;
  textColor: KeyTextColors;
  iconColor: KeyIconColors;
  rightIconColor: KeyTextColors;
}
