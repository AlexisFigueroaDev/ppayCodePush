import { ScrollViewProps, ViewProps } from 'react-native'


import { ICenterProps } from 'native-base'

import { IllustrationsProps } from '@ui/illustrations'

import { colors } from '../../theme/foundations/colors'

export const backgroundColorScrollView = {
  primary: colors.primary[100],
  white: colors.primaryDark[0],
  backgroundDefault: colors.primaryDark[10],
}

export type backgroundColorScrollviewKeys =
  keyof typeof backgroundColorScrollView

export type ContainerProps = Pick<ViewProps, 'testID'> &
  Pick<ScrollViewProps, 'keyboardShouldPersistTaps'> &
  Pick<ScrollViewProps, 'refreshControl'> & {
    topIosScrollViewBackgroundColor?: backgroundColorScrollviewKeys
    bottomIosScrollViewBackgroundColor?: backgroundColorScrollviewKeys
  }

export type ErrorFallbackProps = {
  isError: boolean
  message: string
  buttonText?: string
  retryMessage?: string
  retryButtonText?: string
  onRetry?: (isRetriesCompleted: boolean) => void
  height?: ICenterProps['height']
  illustration?: IllustrationsProps['name']
  maxRetries?: number
}