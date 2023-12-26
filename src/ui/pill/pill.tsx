import React, { FC } from 'react'

import { Box } from 'native-base'

import {
  PillProps,
  pillBgColorBy,
  paddingHorizontalBy,
  textVariantBy,
  pillTextColorBy,
} from './types'
import { hexToRgba } from '../../theme/foundations/opacity'
import { Text } from '../text'

export const Pill: FC<PillProps> = ({
  /** type string with available variants */
  variant = 'info',
  /** type string that works as a label */
  children,
  /** available size for the pill */
  size = 'md',
  /** define the opacity of the pill */
  type = 'solid',
}) => (
  <Box
    px={paddingHorizontalBy[size]}
    py="0.5"
    borderRadius="xs"
    bg={hexToRgba(pillBgColorBy[variant], type === 'alpha' ? 'low' : 'pure')}
  >
    <Text
      variant={textVariantBy[size]}
      color={type === 'alpha' ? pillTextColorBy[variant] : 'white'}
    >
      {children}
    </Text>
  </Box>
)
