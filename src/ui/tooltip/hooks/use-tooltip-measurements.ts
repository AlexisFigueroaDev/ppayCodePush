import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { InteractionManager, View } from 'react-native'

import { getArrowPosition, getTooltipPosition } from '../helpers/measurements'
import {
  Coords,
  CoordsWithArrowDirection,
  DimensionsState,
  TooltipDimensions,
  UseTooltipMeasurementsResponse,
} from '../types'

export const useTooltipMeasurements = (
  isVisible: boolean,
  containerRef: RefObject<View>,
  tooltipDimensions: TooltipDimensions,
  delay: number,
): UseTooltipMeasurementsResponse => {
  const isMounted = useRef<boolean>(false)

  const [dimensions, setDimensions] = useState<DimensionsState>({
    yOffset: 0,
    xOffset: 0,
    eleWidth: 0,
    eleHeight: 0,
  })

  const getElePosition = useCallback(async () => {
    return new Promise((resolve, reject) => {
      if (containerRef.current) {
        setTimeout(() => {
          containerRef?.current?.measure(
            (
              _frameOffsetX,
              _frameOffsetY,
              _width,
              _height,
              pageOffsetX,
              pageOffsetY,
            ) => {
              const measures = {
                xOffset: pageOffsetX || 0,
                yOffset: pageOffsetY || 0,
                eleWidth: _width || 0,
                eleHeight: _height || 0,
              }

              resolve(measures)
            },
          )
        }, 500 + delay)
      } else {
        reject(new Error('current is not set'))
      }
    })
  }, [containerRef, delay])

  const getElementPosition = useCallback(async () => {
    try {
      const _dimensions = (await getElePosition()) as DimensionsState
      setDimensions(_dimensions)
    } catch (e) {
      console.log('Error', e)
    }
  }, [getElePosition])

  const tooltipCoordinates = useMemo<CoordsWithArrowDirection>(
    () =>
      getTooltipPosition({
        elementWidth: dimensions.eleWidth,
        elementHeight: dimensions.eleHeight,
        xOffset: dimensions.xOffset,
        yOffset: dimensions.yOffset,
        tooltipHeight: tooltipDimensions.height,
        tooltipWidth: tooltipDimensions.width,
      }),
    [dimensions, tooltipDimensions],
  )

  const arrowCoordinates = useMemo<Coords>(
    () =>
      getArrowPosition({
        tooltipHeight: tooltipDimensions.height,
        elementWidth: dimensions.eleWidth,
        isArrowBelow: tooltipCoordinates.isArrowBelow,
        tooltipY: tooltipCoordinates.y,
        xOffset: dimensions.xOffset,
      }),
    [dimensions, tooltipCoordinates, tooltipDimensions],
  )

  useLayoutEffect(() => {
    if (isVisible) {
      InteractionManager.runAfterInteractions(() => {
        getElementPosition()
      })
    }
  }, [getElementPosition, isVisible, dimensions])

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  return {
    dimensions,
    tooltipCoordinates,
    arrowCoordinates,
  }
}
