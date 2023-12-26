import { KeySizes } from '@ui/icon/types'

type StepperDotsSize = 'small' | 'medium'

export const StepperDotsSizeRecord: Record<StepperDotsSize, KeySizes> = {
  small: '8',
  medium: '12',
}

export type StepperDotsProps = {
  /** Indicates actual step */
  currentStep: number
  /** Indicates total steps */
  totalSteps?: number
  /** Size of the dots */
  size?: StepperDotsSize
  /** Space between the dots */
  spaceBetweenDots?: 1 | 2
  /** Orientation of the dots to be displayed */
  orientation?: 'vertical' | 'horizontal'
}
