import { Reducer } from 'react';

import { colors } from '@theme/foundations/colors';
import { KeyIconColors, KeyTextIcons } from '@ui/icon';
import { KeyTextColors } from '@ui/text';

type ReducerAction = {
  isDisabled?: boolean;
  isOpen?: boolean;
  hasError?: boolean;
};

type SelectBackdropStyleProps = {
  containerBorderColor: string;
  containerBorderWidth: number;
  containerBackground: string;
  labelColor: KeyTextColors;
  placeholderColor: KeyTextColors;
  iconName: KeyTextIcons;
  iconColor: KeyIconColors;
};

type ReducerActionFnReturnType = SelectBackdropStyleProps & ReducerAction;

type SelectBackdropReducerFn = Reducer<
  ReducerActionFnReturnType,
  ReducerAction
>;

// Define base values for borderColor and labelColor based on the action type
export const baseStyles: SelectBackdropStyleProps = {
  containerBorderColor: colors.primaryDark[40],
  containerBackground: colors.primaryDark[0],
  containerBorderWidth: 1,
  labelColor: 'textLight',
  iconName: 'ChevronDown',
  iconColor: 'textDark',
  placeholderColor: 'textDark',
};

// Reducer function to manage component state
export const selectBackdropReducer: SelectBackdropReducerFn = (
  _state,
  action,
) => {
  const baseProps = { ...baseStyles, ...action };

  if (action.hasError) {
    return {
      ...baseProps,
      containerBorderColor: colors.secondaryFour[80],
      containerBorderWidth: 2,
      labelColor: 'error',
    };
  }

  if (action.isOpen) {
    return {
      ...baseProps,
      containerBorderColor: colors.primary[80],
      containerBorderWidth: 2,
      labelColor: 'primary',
      iconName: 'ChevronUp',
    };
  }

  if (action.isDisabled) {
    return {
      ...baseProps,
      containerBorderWidth: 1,
      containerBorderColor: colors.primaryDark[50],
      containerBackground: colors.primaryDark[20],
      labelColor: 'textDisabled',
      placeholderColor: 'textDisabled',
      iconColor: 'disabled',
    };
  }

  return baseProps;
};
