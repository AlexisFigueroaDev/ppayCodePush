/** Snackbar usage:

  1) import and use useSnackbar hook:
  const { openSnackbar } = useSnackbar()

  2) create a function to open the snackbar with your options:
  title, description, variang and isClosable

  const onHandleSnackbar = () => {
    openSnackbar({
      title: 'Título de la notificación',
      description: 'Ingresá el mensaje acá. Puede tener hasta dos lineas de texto',
      variant: 'success',
      isClosable: true,
    })
  }

  3) use that function as a callback
  <AlphaButton onPress={onHandleSnackbar} >
    show snackbar
  </AlphaButton>
*/

import React, { FC } from 'react'

import { Alert, Box } from 'native-base'

import {
  LEFT_ACCENT,
  NEUTRAL,
  SnackbarProps,
  backgroundColorBy,
  borderColorBy,
  snackbarIconBy,
  snackbarIconColorBy,
} from './types'
import { IconButton } from '../button'
import { Icon } from '../icon'
import { HStack, VStack } from '../layout'
import { Text, BODYSEMI_SM } from '../text'

export const Snackbar: FC<SnackbarProps> = ({
  /** type string with a title to show in the Snackbar */
  title,
  /** type string with a description to show in the Snackbar */
  description,
  /** type string with available Snackbar variants:
   * "success", "error", "warning", "info", "neutral" */
  variant = 'info',
  /** type boolean used to show or not close button */
  isClosable = false,
  /** type function used to close the snackbar */
  onClose,
}) => {
  const isNeutral = variant === NEUTRAL

  return (
    <Alert
      alignSelf="center"
      flexDirection="row"
      status={variant}
      variant={LEFT_ACCENT}
      borderWidth="1"
      borderColor={borderColorBy[variant]}
      bg={backgroundColorBy[variant]}
    >
      <Box width="full">
        <HStack space={2}>
          {!isNeutral ? (
            <Box pt={1}>
              <Icon
                name={snackbarIconBy[variant]}
                color={snackbarIconColorBy[variant]}
                size="24"
              />
            </Box>
          ) : null}
          <Box flex={1}>
            <VStack space={1}>
              {title ? (
                <Box pt={1}>
                  <Text>{title}</Text>
                </Box>
              ) : null}
              {description ? (
                <Box pt={1}>
                  <Text variant={BODYSEMI_SM}>{description}</Text>
                </Box>
              ) : null}
            </VStack>
          </Box>
          <Box pt={1}>
            {isClosable ? (
              <IconButton.Transparent
                testID="snackbar-close-icon-button"
                name="Close"
                size="md"
                onPress={onClose}
              />
            ) : null}
          </Box>
        </HStack>
      </Box>
    </Alert>
  );
}
