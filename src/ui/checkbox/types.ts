import { ReactNode } from 'react';

import { IconProps } from '../icon/types';

export interface CheckboxProps {
  icon?: IconProps['name'];
  value: string;
  isDisabled?: boolean;
  isFocused?: boolean;
  defaultIsChecked?: boolean;
  title?: string;
  subtitle?: string;
  accessibilityLabel?: string;
  onChange?: (isChecked: boolean) => void;
  isChecked?: boolean;
  childrenText?: ReactNode;
  testID: string;
  isTouchable?: boolean;
}
