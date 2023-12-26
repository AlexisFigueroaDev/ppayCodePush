/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react'
import { Platform } from 'react-native'

import { Box, Switch as NBSwitch } from 'native-base'
import { InterfaceSwitchProps } from 'native-base/lib/typescript/components/primitives/Switch/types'

import { colors } from '@theme/foundations/colors'

const IS_IOS = Platform.OS === 'ios'

export const Switch: FC<InterfaceSwitchProps> = props => {
  const { isChecked, isDisabled } = props
  return (
    <Box
      borderRadius="2xl"
      bg={
        IS_IOS
          ? null
          : isChecked && !isDisabled
          ? colors.primary[80]
          : colors.primaryDark[20]
      }
      h="5"
      w="10"
      justifyContent="center"
      alignItems="center"
    >
      <NBSwitch
        {...props}
        size="sm"
        trackColor={{
          true: IS_IOS ? colors.primary[80] : 'transparent',
          false: 'transparent',
        }}
        offTrackColor={IS_IOS ? colors.primaryDark[20] : 'transparent'}
      />
    </Box>
  )
}
