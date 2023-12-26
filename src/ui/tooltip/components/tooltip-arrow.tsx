import React, { FC } from 'react'

import { Box } from 'native-base'

import { TooltipArrowProps } from '../types'

const TooltipArrow: FC<TooltipArrowProps> = ({ isDown, coords }) => {
  const arrowDirection = {
    ...(isDown ? { transform: [{ rotate: '180deg' }] } : {}),
  }

  return (
    <Box position="absolute" top={`${coords?.y}px`} left={`${coords?.x}px`}>
      <Box
        testID="tooltip_arrow"
        variant="tooltip-arrow"
        style={arrowDirection}
      />
    </Box>
  )
}

export default TooltipArrow
