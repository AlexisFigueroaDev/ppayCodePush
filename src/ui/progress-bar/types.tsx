import { colors } from '../../theme/foundations/colors'

type ProgressBarSize = 'thin' | 'medium' | 'fat'

export const ProgressBarSizeRecord: Record<ProgressBarSize, number> = {
  thin: 1,
  medium: 2,
  fat: 3,
}

export const ProgressBarBGColors = {
  bgTrack: colors.primaryDark[30],
  track: colors.secondaryFive[80],
} as const

export type KeyProgressBGColors = keyof typeof ProgressBarBGColors

export interface ProgressBarProps {
  value?: number
  size?: ProgressBarSize
  rounded?: number
  backgroundColor?: KeyProgressBGColors
}
