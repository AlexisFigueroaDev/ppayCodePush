import { IAlertProps } from 'native-base';

import type { KeyTextIcons, KeyIconColors } from '../icon';
import type { KeyTextColors } from '../text';

// ScreenAlert
export const LOW = 'low';
export const MEDIUM = 'medium';
export const HIGH = 'high';
export const VERY_HIGH = 'veryHigh';
export const HIGHEST = 'highest';

export const screenAlertVariantBy = {
  [LOW]: LOW,
  [MEDIUM]: MEDIUM,
  [HIGH]: HIGH,
  [VERY_HIGH]: VERY_HIGH,
  [HIGHEST]: HIGHEST,
} as const;

export const screenAlertColorTextOrIconBy = {
  [LOW]: 'info',
  [MEDIUM]: 'warning',
  [HIGH]: 'error',
  [VERY_HIGH]: 'veryHigh',
  [HIGHEST]: 'errorHighest',
} as const;

type ScreenAlertVariantByType = typeof screenAlertVariantBy;
export type ScreenAlertVariantKeys = keyof ScreenAlertVariantByType;

export const descriptionTextColorBy = (
  criticality: ScreenAlertVariantKeys,
): KeyTextColors =>
  ['veryHigh', HIGHEST].includes(criticality)
    ? screenAlertColorTextOrIconBy[criticality]
    : 'text';

export interface ScreenAlertProps {
  title: string;
  description: string;
  criticality: ScreenAlertVariantKeys;
  handleClose?: () => void;
  width?: IAlertProps['width'];
  buttonText?: string;
  buttonOnClick?: () => void;
  showCross?: boolean;
}

// SingleLineAlert
const INFO = 'info';
const SUCCESS = 'success';
const WARNING = 'warning';
const ERROR = 'error';

export const singleLineColorTextOrIconBy = {
  [INFO]: INFO,
  [SUCCESS]: SUCCESS,
  [WARNING]: WARNING,
  [ERROR]: ERROR,
} as const;

type SingleLineColorTextOrIconByType = typeof singleLineColorTextOrIconBy;
export type SingleLineColorTextOrIconKeys =
  keyof SingleLineColorTextOrIconByType;

export const singleLineIconBy = {
  [INFO]: 'Alert',
  [SUCCESS]: 'SuccessFilled',
  [WARNING]: 'Alert',
  [ERROR]: 'ErrorFilled',
} as const;

export interface SingleLineAlertProps {
  description: string;
  status: SingleLineColorTextOrIconKeys;
}

export type Status =
  | typeof INFO
  | typeof SUCCESS
  | typeof WARNING
  | typeof ERROR;

export interface InCardAlertProps {
  status?: Status;
  description: string;
  isContainer?: boolean;
}

export const inCardAlertIconBy: Record<Status, KeyTextIcons> = {
  info: 'InfoFilled',
  success: 'SuccessFilled',
  warning: 'Alert',
  error: 'Alert',
} as const;

export const inCardAlertColorBy: Record<Status, KeyIconColors> = {
  info: 'info',
  success: 'successLight',
  warning: 'warning',
  error: 'error',
} as const;
