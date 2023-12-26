import React, { FC, cloneElement } from 'react'

import { Pressable } from 'native-base'

import { HighlightedElementProps } from '../types'

export const HighlightedElement: FC<HighlightedElementProps> = ({
  children,
  dimensions,
  onPress,
}) => {
  const newChildren = cloneElement(children as React.ReactElement, {
    ...(children as React.ReactElement).props,
    onPress,
  })

  return (
    <Pressable
      onPress={onPress}
      testID="tooltip_highlighted"
      left={`${dimensions.xOffset}px`}
      top={`${dimensions.yOffset}px`}
      width={`${dimensions.eleWidth}px`}
      height={`${dimensions.eleHeight}px`}
    >
      {newChildren}
    </Pressable>
  )
}
