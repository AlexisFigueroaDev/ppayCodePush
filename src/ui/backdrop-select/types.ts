import { BackdropProps } from '@ui/backdrop/types';

export type BackdropSelectProps = {
  /* This will replace the placeholder */
  value?: string;
  /* Customizable label for each input. */
  label?: string;
  /* Customized input placeholder. */
  placeholder?: string;
  /* Disables input, optional. */
  isDisabled?: boolean;
  /* Renders backdrop content */
  renderBackdropChildren: (close: () => void) => React.ReactElement;
  testID: string;
  /* Error is present for form interactions  */
  hasError?: boolean;
  /* Error message */
  errorMessage?: string;
  /* Event fired on backdrop close */
  onClose?: () => void;
} & { backdropProps: Omit<BackdropProps, 'isOpen' | 'onClose'> };
