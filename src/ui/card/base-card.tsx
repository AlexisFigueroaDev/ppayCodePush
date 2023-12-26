import React, { FC } from 'react'

import { Box } from 'native-base'

import { BaseCardProps } from './types'

export const BaseCard: FC<BaseCardProps> = ({
  /** content */
  children,
  /** background color */
  backgroundColor,
}) => (
  <Box
    borderWidth="1"
    borderColor="primaryDark.30"
    borderRadius={4}
    backgroundColor={backgroundColor}
  >
    {children}
  </Box>
)