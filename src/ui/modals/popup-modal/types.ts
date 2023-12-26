import { IllustrationKey } from '@ui/illustrations';

export interface PopupProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose?: () => void;
  primaryButtonTitle?: string;
  primaryButtonAction?: () => void;
  secondaryButtonTitle?: string;
  secondaryButtonAction?: () => void;
  imageUri?: string;
  icon?: IllustrationKey;
}
