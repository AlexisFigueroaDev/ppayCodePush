import React, { useCallback } from 'react'
import { Dimensions } from 'react-native'

import { useToast, Box } from 'native-base'

import { Snackbar } from './snackbar'

const { width } = Dimensions.get('screen')

export const useSnackbar = (): {
  openSnackbar: ({
    title,
    description,
    variant,
    isClosable,
  }: {
    title?: string
    description: string
    variant: string
    isClosable?: boolean
  }) => void
} => {
  const toast = useToast()

  const closeSnackbar = useCallback(() => {
    toast.closeAll()
  }, [toast])

  const openSnackbar = useCallback(
    ({ title, description, variant, isClosable }) => {
      toast.show({
        duration: 3000,
        render: () => {
          return (
            <Box width={width - 32} bottom={-26}>
              <Snackbar
                title={title}
                description={description}
                variant={variant}
                isClosable={isClosable}
                onClose={closeSnackbar}
              />
            </Box>
          )
        },
      })
    },
    [toast, closeSnackbar],
  )

  return { openSnackbar }
}
