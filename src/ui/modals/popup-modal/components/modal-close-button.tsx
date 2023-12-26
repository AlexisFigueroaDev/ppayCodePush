import React, { FC } from 'react'
import { ViewStyle } from 'react-native'

import { Button } from 'native-base'

import { Icon } from '@ui/icon'

interface ModalCloseButtonProps {
  onClose: () => void
  imageUri?: string
}

export const ModalCloseButton: FC<ModalCloseButtonProps> = ({
  onClose,
  imageUri,
}) => {
  const buttonStyle: ViewStyle = { position: 'absolute', top: 0, right: -5 }
  return (
    <Button variant="link" onPress={onClose} style={buttonStyle}>
      <Icon name="Close" color={imageUri ? 'white' : 'textDark'} />
    </Button>
  )
}
