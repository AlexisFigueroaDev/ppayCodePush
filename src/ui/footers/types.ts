import { FullWidthSolidButtonProps } from '@ui/button/types';
import { CheckboxProps } from '@ui/checkbox/types';

export interface ButtonGroupContainerProps {
  checkbox?: CheckboxProps;
  description?: string;
  primaryButton?: FullWidthSolidButtonProps;
  secondaryButton?: FullWidthSolidButtonProps;
}
