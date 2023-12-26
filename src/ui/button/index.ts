import { IconButtonAlpha } from './icon-button-alpha';
import { IconButtonTransparent } from './icon-button-transparent';

export { ButtonCard } from './button-card';
export { CreditCardButton } from './credit-card-button';
export { FullWidthSolidButton } from './full-with-solid-button';

export { InCardButton } from './in-card-button';
export { InfoButton } from './info-button';
export { SolidButton } from './solid-button';
export { ToggleButton } from './toggle-button';
export { VariableWidthAlphaButton } from './variable-width-alpha-button';
export { VariableWithSolidButton } from './variable-with-solid-button';

export type {
  InCardProps,
  IconButtonProps,
  VariableWithSolidButtonProps,
  FullWidthSolidButtonProps,
  CreditCardButtonProps,
  ToggleProps,
  InfoButtonProps,
  IconButtonAlphaProps,
  VariableWidthAlphaButtonProps,
  BaseButtonProps,
  SolidButtonProps,
  ButtonCardProps,
} from './types';

export const IconButton = {
  Transparent: IconButtonTransparent,
  Alpha: IconButtonAlpha,
} as const;
