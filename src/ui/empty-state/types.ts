import { Variants } from '@ui/text/types'

import { FullWidthSolidButtonProps } from '../button/types'
import { IllustrationSize, IllustrationsProps } from '../illustrations/types'

export const EMPTY_STATE_SIZES = {
  SM: 'sm',
  MD: 'md',
} as const

export type EmptyStateSizes =
  (typeof EMPTY_STATE_SIZES)[keyof typeof EMPTY_STATE_SIZES]

export type EmptyStateProps = {
  description: string
  illustration: IllustrationsProps['name']
  buttonText?: string
  onPressButton?: FullWidthSolidButtonProps['onPress']
  size?: EmptyStateSizes
  titleText?: string
}

export const illustrationSizeBy: Record<EmptyStateSizes, IllustrationSize> = {
  [EMPTY_STATE_SIZES.SM]: 'md',
  [EMPTY_STATE_SIZES.MD]: 'lg',
}

export const descriptionVariantSizeBy: Record<EmptyStateSizes, Variants> = {
  [EMPTY_STATE_SIZES.SM]: 'body-sm',
  [EMPTY_STATE_SIZES.MD]: 'body-md',
}
