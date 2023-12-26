/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react'

import { Flex } from 'native-base'

import { colors } from '../../theme/foundations/colors'

interface RowContentProps {
  variant: string
  component: JSX.Element
  isBorder: boolean
}

const BORDER_STYLES = {
  borderColor: colors.primaryDark[30],
  borderBottomWidth: 1,
}

export const RowContainer: FC<RowContentProps> = ({
  variant,
  component,
  isBorder = false,
}) => {
  return (
    <Flex variant={variant} {...(isBorder ? BORDER_STYLES : null)}>
      {component}
    </Flex>
  )
}
