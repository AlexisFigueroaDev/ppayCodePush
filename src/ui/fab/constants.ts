import { BASE_SIZES } from '@theme/constants';

export const FAB_SIZES = {
  md: BASE_SIZES.MEDIUM,
  lg: BASE_SIZES.LARGE,
} as const;

export const DEFAULT_FAB_SIZE = FAB_SIZES.md;

export type FabSizes = (typeof FAB_SIZES)[keyof typeof FAB_SIZES];
