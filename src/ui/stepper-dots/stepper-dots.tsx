import React, { FC } from 'react'

import { VStack } from 'native-base'

import { Icon } from '@ui/icon'
import { HStack } from '@ui/layout'

import { StepperDotsProps, StepperDotsSizeRecord } from './types'

export const StepperDots: FC<StepperDotsProps> = ({
  currentStep,
  totalSteps = 0,
  size = 'small',
  orientation = 'horizontal',
  spaceBetweenDots = 1,
}) => {
  const renderDots = (): JSX.Element[] => {
    const dots = []

    for (let i = 0; i < totalSteps; i++) {
      const color = i < currentStep ? 'primary' : 'disabled'

      dots.push(
        <Icon
          key={i}
          name="Dot"
          color={color}
          size={StepperDotsSizeRecord[size]}
        />,
      )
    }

    return dots
  }

  return orientation === 'horizontal' ? (
    <HStack space={spaceBetweenDots}>{renderDots()}</HStack>
  ) : (
    <VStack space={spaceBetweenDots}>{renderDots()}</VStack>
  )
}
