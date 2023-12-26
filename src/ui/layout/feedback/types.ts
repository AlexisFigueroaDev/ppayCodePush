import { FC, ReactNode } from 'react'

import { FullWidthSolidButtonProps } from '@ui/button';
import { CheckboxProps } from '@ui/checkbox/types';
import { IconColors } from '@ui/icon';

export type ScreenVariants = keyof Pick<
  typeof IconColors,
  'error' | 'warning' | 'success' | 'info'
>;

export interface BaseBodyContent {
  title: string;
  description?: string;
  date?: Date;
}

export interface NoneBodyContent {
  variant: 'none';
}

export type BodyContent = BaseBodyContent & NoneBodyContent;

export interface FeedbackContextProps {
  variant: ScreenVariants;
  body?: BodyContent;
  checkbox?: CheckboxProps;
  description?: string;
  primaryAction?: FullWidthSolidButtonProps;
  secondaryAction?: FullWidthSolidButtonProps;
}

export interface FeedbackProps extends FeedbackContextProps {
  children?: ReactNode
}

export interface FeedbackHOCProps {
  Feedback: FC<FeedbackProps>
  Header: FC
  Body: FC
  Footer: FC
}
