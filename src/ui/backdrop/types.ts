import { ReactElement } from 'react';

import { ButtonGroupContainerProps } from '@ui/footers/types';
import { KeyTextIcons } from '@ui/icon/types';

export type BackdropProps = {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  overlayOpacity?: string;
  wrappedHeight?: boolean;
  withScroll?: boolean;
} & {
  buttonGroup?: Pick<
    ButtonGroupContainerProps,
    'primaryButton' | 'secondaryButton'
  >;
};

/** @deprecated USE backdrop instead */
export interface ActionSheetProps {
  children: ReactElement;
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  hasButtonGroup?: boolean;
  primaryOnPress?: () => void;
  secondaryOnPress?: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  overlayOpacity?: string;
  height?: number | string;
  iconName?: KeyTextIcons;
}

/** @deprecated USE backdrop instead */
export interface BackdropHeaderProps {
  title?: string;
}
