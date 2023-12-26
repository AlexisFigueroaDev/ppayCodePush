import { ReactNode } from 'react'

import { IllustrationKey } from '@ui/illustrations/types'

type CheckboxButtonGroupProps = {
  /** Function to handle checkbox state changes */
  onCheckboxChange: () => void;
  /** Children of the checkbox for adding custom code as needed */
  childrenText?: ReactNode;
  /** Boolean to track the checked state of the checkbox */
  isCheckboxChecked?: boolean;
  /** string for checkbox */
  checkboxText?: string;
  /** Accessibility Label for checkbox */
  checkboxAccessibilityLabel?: string;
};

export type OnboardingScreenProps = {
  title: string;
  primaryButton?: { label: string; onClose: () => void };
  secondaryButton?: { label: string; onClose: () => void };
  isDisabledPrimaryButton?: boolean;
  isLoadingPrimaryButton?: boolean;
  onCloseBtn?: () => void;
  illustration?: IllustrationKey;
  description?: string;
  textRows?: string[];
  withButtonGroup?: boolean;
  children?: React.ReactNode;
  checkbox?: CheckboxButtonGroupProps;
};

export interface OnboardingSkeletonScreenProps {
  onCloseBtn?: () => void
  illustration?: IllustrationKey
  children?: React.ReactNode
}
