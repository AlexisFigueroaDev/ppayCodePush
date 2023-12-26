import { Dimensions } from 'react-native'

import {
  ARROW_HEIGHT,
  Coords,
  CoordsWithArrowDirection,
  TooltipMeasurementAttributes,
} from '../types'

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('screen')

export const calculateXOffsetLeft = (xOffset: number): number => {
  const value = xOffset - 12

  if (value > 0) {
    return value
  }
  if (value === 0) {
    return xOffset - 8
  }
  return xOffset - xOffset / 2
}

export const calculateXOffsetRight = (
  xOffset: number,
  endOfElement: number,
): number => {
  const value = endOfElement + 12

  if (value < Math.ceil(ScreenWidth)) {
    return xOffset + 12
  }
  if (value === Math.ceil(ScreenWidth)) {
    return xOffset + 8
  }
  return xOffset + Math.ceil(ScreenWidth - endOfElement) / 2
}

export const calculateAvailableMaxWidth = (tooltipX: number): number => {
  const { width } = Dimensions.get('screen')
  const availableWidth = Math.abs(width - tooltipX)
  return availableWidth - 40
}

const calculateX = ({
  elementWidth,
  xOffset,
  tooltipWidth,
}: Pick<
  TooltipMeasurementAttributes,
  'elementWidth' | 'xOffset' | 'tooltipWidth'
>): number => {
  const halfWidth = elementWidth / 2
  const firstHalf = Math.ceil(xOffset + halfWidth)
  const secondHalf = Math.ceil(ScreenWidth - xOffset - halfWidth)

  if (firstHalf > secondHalf) {
    const endOfElement = xOffset + elementWidth
    return calculateXOffsetRight(endOfElement - tooltipWidth, endOfElement)
  }

  if (secondHalf > firstHalf) {
    return calculateXOffsetLeft(xOffset)
  }

  return firstHalf - tooltipWidth / 2
}

const calculateTooltipYAndArrowDirection = ({
  elementHeight,
  yOffset,
  tooltipHeight,
}: Pick<
  TooltipMeasurementAttributes,
  'elementHeight' | 'yOffset' | 'tooltipHeight'
>): { isArrowBelow: boolean; y: number } => {
  const halfHeight = elementHeight / 2
  const firstHalf = Math.ceil(yOffset + halfHeight)
  const secondHalf = Math.ceil(ScreenHeight - yOffset - halfHeight)

  if (firstHalf > secondHalf) {
    return { y: yOffset - tooltipHeight - ARROW_HEIGHT - 3, isArrowBelow: true }
  }

  return { y: yOffset + elementHeight + ARROW_HEIGHT + 3, isArrowBelow: false }
}

export const getTooltipPosition = ({
  elementWidth,
  xOffset,
  tooltipWidth,
  elementHeight,
  yOffset,
  tooltipHeight,
}: TooltipMeasurementAttributes): CoordsWithArrowDirection => {
  const { isArrowBelow, y } = calculateTooltipYAndArrowDirection({
    elementHeight,
    yOffset,
    tooltipHeight,
  })
  return {
    x: calculateX({ elementWidth, xOffset, tooltipWidth }),
    y,
    isArrowBelow,
  }
}

export const getArrowPosition = ({
  tooltipY,
  xOffset,
  elementWidth,
  tooltipHeight,
  isArrowBelow,
}: {
  tooltipY: number
  xOffset: number
  elementWidth: number
  tooltipHeight: number
  isArrowBelow: boolean
}): Coords => {
  return {
    x: xOffset + elementWidth / 2 - 7.5,
    y: tooltipY + (isArrowBelow ? tooltipHeight : -ARROW_HEIGHT),
  }
}
