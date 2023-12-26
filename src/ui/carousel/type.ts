import { JSXElementConstructor, ReactElement } from 'react';

import { ScreenAlertProps } from '../alert/types';
import { Level } from '../badge';
import { BaseButtonProps, ToggleProps } from '../button';
import { LevelCardProps } from '../card';
import { InfoCardProps } from '../card/types';
import { EmptyStateProps } from '../empty-state/types';

type CarouselBaseHeaderRightButton = Pick<BaseButtonProps, 'onPress'> & {
  isDisabled?: boolean;
  text: string;
};

type CarouselBaseHeader = {
  title?: string;
  rightButton?: CarouselBaseHeaderRightButton;
};

export type CarouselProps<T> = CarouselBaseHeader & {
  data: T[];
  children: (item: T) => ReactElement<JSXElementConstructor<T>>;
  keyExtractor: (item: T, index: number) => string;
  snapToInterval?: number;
};

export type BaseCarouselProps = CarouselBaseHeader & {
  isLoading?: boolean;
};

export interface InfoCardCarouselProps extends BaseCarouselProps {
  data: InfoCardProps[];
  isError?: boolean;
  onClickEmptyErrorButton?: EmptyStateProps['onPressButton'];
  descriptionEmptyError?: EmptyStateProps['description'];
  descriptionEmptyData?: EmptyStateProps['description'];
  buttonTextEmptyError?: string;
}

export interface ScreenAlertCarouselProps
  extends Omit<BaseCarouselProps, 'isLoading'> {
  data: ScreenAlertProps[];
}

export interface ToggleCarouselProps extends BaseCarouselProps {
  data: ToggleProps[];
  toggleOnPress: (toggleName: string) => void;
  currentDisabledToggle: string;
}

export interface CategoryDataProps {
  id: string;
  name: string;
  onPress: () => void;
}

export interface CategoryCarouselProps extends BaseCarouselProps {
  data: CategoryDataProps[];
}

export type SkeletonCategoryCarouselProps = Pick<
  CategoryCarouselProps,
  'title'
>;

export interface LevelCardCarouselProps {
  title?: string;
  data: LevelCardProps[];
  isLoading: boolean;
  initialLevel?: Level;
}
