import { colors } from '../../theme/foundations/colors';

export const LEFT_ACCENT = 'left-accent';

export const INFO = 'info';
export const SUCCESS = 'success';
export const ERROR = 'error';
export const WARNING = 'warning';
export const NEUTRAL = 'neutral';

export const backgroundColorBy = {
  error: colors.secondaryFour[20],
  success: colors.secondaryTwo[20],
  info: colors.secondaryFive[20],
  warning: colors.secondaryThree[20],
  neutral: colors.primaryDark[10],
};

export const borderColorBy = {
  error: colors.secondaryFour[80],
  success: colors.secondaryTwo[100],
  info: colors.secondaryFive[80],
  warning: colors.secondaryThree[100],
  neutral: colors.primaryDark[80],
};

export const snackbarIconBy = {
  [ERROR]: 'ErrorFilled',
  [SUCCESS]: 'SuccessFilled',
  [INFO]: 'InfoFilled',
  [WARNING]: 'WarningFilled',
  [NEUTRAL]: undefined,
} as const;

export const snackbarIconColorBy = {
  [ERROR]: 'error',
  [SUCCESS]: 'success',
  [INFO]: 'info',
  [WARNING]: 'warning',
  [NEUTRAL]: 'text',
} as const;

type Variant =
  | typeof INFO
  | typeof SUCCESS
  | typeof ERROR
  | typeof WARNING
  | typeof NEUTRAL;

export interface SnackbarProps {
  title?: string;
  description: string;
  variant?: Variant;
  isClosable?: boolean;
  onClose: () => void;
}
