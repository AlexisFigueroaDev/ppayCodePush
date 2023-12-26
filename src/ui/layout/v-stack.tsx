import React, { FC } from 'react'

import { VStack as RNVStack } from 'native-base'

export const VStack: FC<{ space?: number }> = ({
  /** Internal content componets */
  children,
  /** Space between components * 4 */
  space = 0,
}) => (
  <RNVStack space={space} w="full">
    {children}
  </RNVStack>
)
