import React, { ReactElement } from 'react'

import { Box, Pressable } from 'native-base'

import { Icon } from '../icon'

export const TabBarQr = (): ReactElement => {
  return (
    <Box variant="tab-bar-qr-shadow">
      <Pressable
        /** owner team should create a custom method to manage the behavior once the user has pressed this component */
        onPress={undefined}
        variant="tab-bar-qr-icon"
      >
        <Icon name="Qr" color="white" />
      </Pressable>
    </Box>
  )
}
