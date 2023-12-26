import React, { FC } from 'react'

import { HStack as RNHStack } from 'native-base'

export const HStack: FC<{ space?: number }> = ({
  /** Internal content componets */
  children,
  /** Space between components * 4 */
  space = 0,
}) => <RNHStack space={space}>{children}</RNHStack>
