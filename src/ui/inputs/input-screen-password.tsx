import React, { FC } from 'react'

import { Box, Flex } from 'native-base'
import { CodeField } from 'react-native-confirmation-code-field'

import { InputScreenPasswordProps } from './types'
import { Icon } from '../icon'
import { VStack } from '../layout'
import { Text } from '../text'

export const InputScreenPassword: FC<InputScreenPasswordProps> = ({
  /* Input value */
  value,
  /* SetStateAction for change input value */
  setValue,
  /* Number of digits of code  */
  digits = 6,
  /* Error text */
  errorText,
}) => (
  <VStack space={8}>
    <VStack space={3}>
      <Flex alignItems="center">
        <Box
          backgroundColor="primary.20"
          width={12}
          height={12}
          borderRadius={100}
          alignItems="center"
          justifyContent="center"
        >
          <Icon size="32" name="SecureFilled" color="primary" />
        </Box>
      </Flex>
      <Text variant="bodyBold-md" textAlign="center">
        Ingresá tu clave
      </Text>
    </VStack>

    <VStack space={6}>
      <Flex alignItems="center">
        <CodeField
          value={value}
          cellCount={digits}
          keyboardType="number-pad"
          onChangeText={val => {
            setValue(val)
          }}
          renderCell={({ index, symbol }) => (
            <Box
              height={3}
              width={3}
              marginRight={index + 1 === digits ? 0 : 3}
              backgroundColor={symbol ? 'primary.80' : 'primaryDark.30'}
              borderRadius={100}
              alignItems="center"
              justifyContent="center"
            />
          )}
        />
      </Flex>
      {errorText ? (
        <Text variant="body-sm" color="error" textAlign="center">
          {errorText}
        </Text>
      ) : null}
    </VStack>
  </VStack>
)
