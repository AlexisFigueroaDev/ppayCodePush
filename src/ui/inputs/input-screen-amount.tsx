/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react'
import { TextInput } from 'react-native'

import { Box } from 'native-base'

import { InputScreenAmountProps } from './types'
import { VStack } from '../layout'
import { BalanceRow } from '../row'
import { amountFixed } from '../row/utils/formatters'
import { Text } from '../text'

export const InputScreenAmount: FC<InputScreenAmountProps> = ({
  /** boolean for showing keyboard once component are mounted */
  autoFocus = false,
  /** type of currency */
  currency = '$',
  /** string fot text title  */
  title,
  /** string fot text subtitle  */
  subtitle,
  /** string fot text leyend  */
  legend,
  /** boolean for text error style */
  error,
  /** amount value */
  amount,
  /** set amount value */
  setAmount,
  /** function to be fired once intro key has been pressed  */
  onSubmitKeyPress,
  /** max length of input */
  maxLength,
}) => (
  <VStack space={title ? 10 : 0}>
    <Box>
      {title ? (
        <Text variant="bodyBold-md" textAlign="center">
          {title}
        </Text>
      ) : null}
      {subtitle ? (
        <Text variant="body-md" textAlign="center">
          {subtitle}
        </Text>
      ) : null}
    </Box>
    <VStack space={2}>
      <Box alignItems="center">
        <BalanceRow
          value={amount === '' || amount === '.' ? 0 : parseFloat(amount)}
          isShowAmount
          currency={currency}
          variant="large"
        />
        <TextInput
          autoFocus={autoFocus}
          keyboardType="numeric"
          onEndEditing={onSubmitKeyPress}
          onChangeText={value => setAmount(amountFixed(value))}
          value={amount}
          maxLength={maxLength}
          cursorColor="transparent"
          style={{
            position: 'absolute',
            color: 'transparent',
          }}
        />
      </Box>
      {legend ? (
        <Text variant="body-md" textAlign="center">
          {legend}
        </Text>
      ) : error ? (
        <Text variant="body-md" textAlign="center" color="error">
          {error}
        </Text>
      ) : null}
    </VStack>
  </VStack>
)
