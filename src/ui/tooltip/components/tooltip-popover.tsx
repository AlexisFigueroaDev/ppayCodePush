import React, { FC } from 'react'

import { Box, Flex } from 'native-base'

import { IconButton } from '../../button'
import { Text } from '../../text'
import { Coords } from '../types'

interface TooltipPopoverProps {
  height: number
  width: number
  coords: Coords
  textTooltip?: string
  onClose?: () => void
}

const TooltipPopover: FC<TooltipPopoverProps> = ({
  width,
  height,
  coords,
  textTooltip = '',
  onClose = () => {},
}) => {
  return (
    <Flex
      variant="tooltip-popover"
      width={width}
      height={`${height}px`}
      left={`${coords?.x}px`}
      top={`${coords?.y}px`}
    >
      <Flex
        flexDirection="row"
        width="full"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" flexShrink={1}>
          <Text variant="body-sm" color="text">
            {textTooltip}
          </Text>
        </Box>
        <Box display="flex">
          <IconButton.Transparent
            testID="tooltip-popover-close-button"
            name="Close"
            size="md"
            color="textDark"
            onPress={onClose}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default TooltipPopover
