import { IAspectRatioProps, IBoxProps, IPressableProps } from 'native-base';

import { Status } from '@ui/alert/types';

import { colors } from '../../theme/foundations/colors';
import { Level, TagProps } from '../badge';
import { MiniBannerProps } from '../banner';
import {
  VariableWithSolidButtonProps,
  CreditCardButtonProps,
  IconButtonProps,
} from '../button';
import { KeyTextIcons } from '../icon/types';
import { IllustrationsProps } from '../illustrations/types';
import { BlanceRowProps, ActivityRowProps, InCardRowProps } from '../row';
import { SingleRowType } from '../row/type';
import { Variants } from '../text/types';

export const cardBgColorBy = {
  white: colors.backgrounds[0],
  light: colors.backgrounds[20],
  lighter: colors.backgrounds[40],
  dark: colors.backgrounds[60],
  darker: colors.backgrounds[80],
};

type CardBgColorBy = typeof cardBgColorBy;
type CardBgColorByKeys = keyof CardBgColorBy;

export const widthValueBy = {
  onboarding: '160',
  medium: '50%',
  full: 'full',
};

type WidthValueBy = typeof widthValueBy;
type WidthValueByKeys = keyof WidthValueBy;

export interface ColorCardProps {
  iconName: KeyTextIcons;
  label?: string;
  title: string;
  amount?: number;
  description?: string;
  variant?: CardBgColorByKeys;
  type?: WidthValueByKeys;
  buttonOnClick?: () => void;
  isShowBalanceRow?: boolean;
}

export interface InfoCardProps {
  title: string;
  logoUri?: string;
  imageUri?: string;
  imageBgColor?: IAspectRatioProps['bgColor'];
  label?: string;
  legend?: string;
  highlightText?: string;
  description?: string;
  width?: IBoxProps['width'];
  backgroundColor?: IBoxProps['backgroundColor'];
  noOfLinesTitle?: number;
  noOfLinesDescription?: number;
  noOfLinesHighlightText?: number;
  noOfLinesLegend?: number;
  onPress?: IPressableProps['onPress'];
  onPressIn?: IPressableProps['onPressIn'];
  onPressOut?: IPressableProps['onPressOut'];
  isDisabled?: IPressableProps['disabled'];
}

export interface SkeletonInfoCardProps {
  width?: IBoxProps['width'];
}

/* ListCard */

export interface DataListProps {
  id: number;
  title: string;
  description: string;
  date: string;
  amount: string | number;
  status: ActivityRowProps['status'];
  icon: ActivityRowProps['icon'];
  transactionType: string;
  imgUri: string;
}

export interface ListCardProps {
  data: Array<DataListProps>;
  bottomOnPress?: () => void;
  bottomLabel?: string;
  routeItemScreen?: string;
  routeItemStack?: string;
  title: string;
  isLoading?: boolean;
  skeletonLoadingItems?: number;
  emptyStateText: string;
  emptyIlustration?: IllustrationsProps['name'];
  rightIcon?: KeyTextIcons;
  onListItemPress?: (t: DataListProps) => void;
  customItemList?: (t: DataListProps) => void;
}

/** Amount Card */

interface AmountCardRightButtonProps
  extends Pick<VariableWithSolidButtonProps, 'iconName' | 'onPress'> {
  text: string;
}

export interface AmountCardTagProps extends Pick<TagProps, 'variant'> {
  text?: string;
}

interface ButtonRowBase extends Pick<VariableWithSolidButtonProps, 'onPress'> {
  text: string;
}

export type ButtonCard = Pick<
  CreditCardButtonProps,
  'onPress' | 'lastNumbers' | 'text' | 'iconName'
>;

export interface AmountCardProps {
  title: string;
  extraIconTitle?: IconButtonProps;
  isLoading: boolean;
  error?: string;
  textBalance?: string;
  balance: Pick<BlanceRowProps, 'currency' | 'value' | 'onPress'>;
  rightButton?: AmountCardRightButtonProps;
  rightButtonJustify: string | null;
  tag?: AmountCardTagProps;
  banner?: MiniBannerProps;
  buttonRow?: {
    buttonOne: ButtonRowBase;
    buttonTwo: ButtonRowBase;
    buttonCard: Pick<
      CreditCardButtonProps,
      'onPress' | 'lastNumbers' | 'text' | 'iconName'
    >;
  };
  balanceIsConcealable?: boolean;
  isBalanceShow?: boolean | null;
  toggleShowBalance?: () => void;
  singleRows?: SingleRowType[];
  subtitle?: string;
  titleVariant?: Variants;
  alert?: string;
  alertVariant?: Status;
  imgUri?: string;
}
export interface LevelCardSkeletonProps {
  rowsLength?: number;
  isWithDefaultRow?: boolean;
}

export interface LevelCardProps {
  title: string;
  featuredTitle?: string;
  featuredRows?: InCardRowProps[];
  contentSectionTitle: string;
  contentLimitTitle?: string;
  levelCode?: Level;
  icon?: KeyTextIcons;
  rows: InCardRowProps[];
  defaultRow?: InCardRowProps;
  onPressFooter?: () => void;
  footerButtonLabel?: string;
  isLoading: boolean;
  skeletonProps?: LevelCardSkeletonProps;
  isFullWidth?: boolean;
}

export const colorByLevel = {
  1: colors.primary[20],
  2: colors.secondaryOne[20],
  3: colors.secondaryTwo[20],
  b2b: colors.loyaltySix[20],
};
export interface BaseCardProps {
  backgroundColor?: CardBgColorByKeys;
}
