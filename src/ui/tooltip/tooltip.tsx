/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useRef, FC } from 'react'
import { View, Modal, TouchableOpacity } from 'react-native'

import { Box } from 'native-base'

import { HighlightedElement } from './components/highlighted-component'
import TooltipArrow from './components/tooltip-arrow'
import TooltipPopover from './components/tooltip-popover'
import { useTooltipMeasurements } from './hooks/use-tooltip-measurements'
import { TooltipProps } from './types'

export const Tooltip: FC<TooltipProps> = ({
  children,
  isVisible = false,
  onOpen = () => {},
  onClose = () => {},
  withOverlay = true,
  withPointer = true,
  withHighlightedComponent = true,
  textTooltip = '',
  width = 200,
  height = 80,
  delay = 0,
}) => {
  const renderedEle = useRef<View>(null)
  const { dimensions, tooltipCoordinates, arrowCoordinates } =
    useTooltipMeasurements(isVisible, renderedEle, { width, height }, delay)

  const handleOnPress = useCallback(() => {
    isVisible ? onClose() : onOpen()
  }, [onClose, onOpen, isVisible])

  return (
    <Box ref={renderedEle} testID="tooltip" renderToHardwareTextureAndroid>
      <Box>{children}</Box>
      {!Object.values(dimensions).includes(0) ? (
        <Modal
          testID="tooltip_modal"
          transparent
          visible={isVisible}
          onShow={onOpen}
          animationType="fade"
        >
          <TouchableOpacity
            testID="tooltip_overlay"
            onPress={handleOnPress}
            activeOpacity={1}
            style={{
              backgroundColor: withOverlay ? '#111524BF' : 'transparent',
              flex: 1,
              zIndex: 1,
            }}
          >
            <Box>
              {withHighlightedComponent ? (
                <HighlightedElement
                  dimensions={dimensions}
                  onPress={handleOnPress}
                >
                  {children}
                </HighlightedElement>
              ) : null}
              {withPointer ? (
                <TooltipArrow
                  coords={arrowCoordinates}
                  isDown={tooltipCoordinates.isArrowBelow}
                />
              ) : null}
              <TooltipPopover
                height={height}
                width={width}
                coords={tooltipCoordinates}
                onClose={onClose}
                textTooltip={textTooltip}
              />
            </Box>
          </TouchableOpacity>
        </Modal>
      ) : null}
    </Box>
  )
}
