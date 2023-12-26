import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

import { InterfaceFormControlProps } from 'native-base/lib/typescript/components/composites/FormControl/types';

import { RHControllerProps } from '@ui/row';

import { KeyTextIcons } from '../icon';

export interface InputColors {
  title: string;
  bg: string;
  border: string;
}

export interface TextFieldProps extends InterfaceFormControlProps {
  inputDefaultValue?: string;
  errorMessage?: string;
  helperText?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  title?: string;
  value?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  type?: 'text' | 'number';
  rightIcon?: KeyTextIcons;
  onIconPress?: () => void;
  autoFocus?: boolean;
  format?: InputFormat;
  testID: string;
}

export interface ControlledTextFieldProps
  extends RHControllerProps<
    Omit<TextFieldProps, 'defaultValue' | 'onChange' | 'onBlur' | 'value'>
  > {
  format?: InputFormat;
  valueDefault?: string;
}

export const INPUT_COLORS: { [key: string]: InputColors } = {
  normal: {
    title: 'primaryDark.70',
    bg: 'transparent',
    border: 'primaryDark.40',
  },
  error: {
    title: 'secondaryFour.80',
    bg: 'transparent',
    border: 'secondaryFour.80',
  },
  disabled: {
    title: 'primaryDark.60',
    bg: 'primaryDark.20',
    border: 'primaryDark.50',
  },
  focus: {
    title: 'primary.80',
    bg: 'transparent',
    border: 'primary.80',
  },
};

export const DEFAULT = 'default';
export const CREDIT_CARD = 'Credit_Card';
export const TELEPHONE = 'Telephone';
export const DATE = 'Date';
export const NO_FORMAT = 'no-format';
export const GENERIC_DATA = 'generic-data';

export const formatInput = {
  [CREDIT_CARD]: CREDIT_CARD,
  [TELEPHONE]: TELEPHONE,
  [DATE]: DATE,
  [NO_FORMAT]: NO_FORMAT,
  [DEFAULT]: DEFAULT,
  [GENERIC_DATA]: GENERIC_DATA,
};

export const maskFormat = {
  [NO_FORMAT]: '*'.repeat(300),
  [DEFAULT]: '********************',
  [CREDIT_CARD]: '9999 9999 9999 9999',
  [TELEPHONE]: '99-9999-9999',
  [DATE]: '99/99/9999',
  [GENERIC_DATA]: '********',
};

export type InputFormat = keyof typeof formatInput;
