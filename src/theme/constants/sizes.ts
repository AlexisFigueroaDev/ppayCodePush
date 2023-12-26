export const BASE_SIZES = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
  XL: 'xl',
} as const;

export type BaseSizes = (typeof BASE_SIZES)[keyof typeof BASE_SIZES];
