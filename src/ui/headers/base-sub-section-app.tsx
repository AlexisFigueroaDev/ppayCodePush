/**
 * @example
 *  <Container>
 *    <BaseSubSectionApp>
        <Component />
      </BaseSubSectionApp>
 *    Others components
 *  </Container>
 */
import React, { FC } from 'react'

import { Box } from 'native-base'

import { SubSectionAppProps, SubSectionAppBGColors } from './types'

export const BaseSubSectionApp: FC<SubSectionAppProps> = ({
  /** Internal content component */
  children,
  /** If is necessary you can add a color for the bottom box */
  bottomBackgroundColor = 'white',
  /** If is necessary you can add a color for the top box */
  topBackgroundColor = 'neutral',
}) => (
  <Box backgroundColor={SubSectionAppBGColors[topBackgroundColor]}>
    <Box
      backgroundColor={SubSectionAppBGColors[bottomBackgroundColor]}
      height="10"
      position="absolute"
      left={0}
      bottom={0}
      right={0}
    />
    {children}
  </Box>
)
