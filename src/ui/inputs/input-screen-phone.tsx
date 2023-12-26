/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { TextInput } from 'react-native';

import { Box } from 'native-base';

import { formatRawNumber } from '@screens/myBusinessV3/helpers/formatters';
import { VStack } from '@ui/layout';
import { phoneMask } from '@ui/row/utils/formatters';

import { InputScreenPhoneProps } from './types';
import { colors } from '../../theme/foundations/colors';
import { Text } from '../text';

export const InputScreenPhone: React.FC<InputScreenPhoneProps> = ({
  /** Country mask format  */
  country = 'AR',
  /** string for input placeholder */
  placeholder,
  /** boolean for showing keyboard once component are mounted */
  autoFocus = true,
  /** phoneNumber value */
  phoneNumber,
  /** set phoneNumber state */
  setPhoneNumber,
  /** function to be fired once intro key has been pressed  */
  onSubmitKeyPress,
  /** string fot text title  */
  title,
  /** string fot text subtitle  */
  subtitle,
  /** string fot text legend  */
  legend,
  /** Input has errors */
  hasError,
}) => {
  const onChange = useCallback(
    (_value: string) => {
      const value = _value.startsWith('0') ? _value.substring(1) : _value;

      const rawNumber = formatRawNumber(value);

      if (rawNumber.length <= 10) {
        const maskedNumber = phoneMask(rawNumber, country);

        setPhoneNumber({
          rawNumber,
          maskedNumber: maskedNumber.startsWith('0')
            ? maskedNumber.substring(1)
            : maskedNumber,
        });
      }
    },
    [country, setPhoneNumber],
  );

  return (
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
          <TextInput
            placeholder={placeholder}
            autoFocus={autoFocus}
            cursorColor={colors.primary[100]}
            style={{
              fontSize: 32,
              lineHeight: 40,
              fontWeight: '700',
              width: '100%',
              textAlign: 'center',
              color: colors.primaryDark[80],
            }}
            keyboardType="phone-pad"
            defaultValue=""
            onChangeText={onChange}
            onSubmitEditing={onSubmitKeyPress}
            value={phoneNumber.maskedNumber}
          />
        </Box>
        <Text
          variant="body-md"
          textAlign="center"
          color={hasError ? 'error' : undefined}
        >
          {legend}
        </Text>
      </VStack>
    </VStack>
  );
};
