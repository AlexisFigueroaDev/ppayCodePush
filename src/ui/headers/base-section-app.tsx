/**
 * @example
 * <Container>
 *   <BaseSectionApp />
 *   Others components
 * </Container>
 */
import React, { FC } from 'react'

import { Box } from 'native-base'

export const BaseSectionApp: FC = () => (
  <Box
    backgroundColor="primary.100"
    height="72px"
    position="absolute"
    width="1024"
    top="0"
    zIndex={-1}
  />
)
