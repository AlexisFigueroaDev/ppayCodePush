import React, { FC } from 'react'

import { Badge } from 'native-base'

import { LabelProps, colorBy } from './types'
import { Text } from '../text'

export const BadgeLabel: FC<LabelProps> = ({
  /** string that use the text component */
  children,
  /** type of badgelabel available */
  variant = 'info',
  /** number available for radius */
  borderRadius = '2px',
  /** type of texts available */
  textVariant = 'bodyBold-xxs',
}) => (
  <Badge
    borderTopLeftRadius={borderRadius}
    borderBottomRightRadius={borderRadius}
    variant={`${variant}-label`}
  >
    <Text
      maxFontMultiplier={1.2}
      variant={textVariant}
      color={colorBy(variant)}
    >
      {children}
    </Text>
  </Badge>
)
