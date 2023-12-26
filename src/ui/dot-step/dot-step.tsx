import React, { FC } from 'react'

import { Icon } from '@ui/icon'

import { DotStepProps } from './types'

export const DotStep: FC<DotStepProps> = ({
  /** Indicates actual step */
  currentStep,
  /** Indicates total steps */
  totalSteps = 0,
}) => {
  const dots = []

  for (let i = 0; i < totalSteps; i++) {
    dots.push(
      <Icon
        key={i}
        name="Dot"
        color={+i < +currentStep ? 'primary' : 'disabled'}
        size="8"
      />,
    )
  }

  return <>{dots}</>
}
