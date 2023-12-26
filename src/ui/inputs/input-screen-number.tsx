import React, { FC } from 'react';

import { Box } from 'native-base';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';

import { colors } from '@theme/foundations/colors';

import { InputScreenNumbersProps } from './types';
import { VStack } from '../layout';
import { Text } from '../text';

export const InputScreenNumbers: FC<InputScreenNumbersProps> = ({
  /* Title text */
  title,
  /* Description text */
  description,
  /* Input value */
  value,
  /* SetStateAction for change input value */
  setValue,
  /* Number of digits of code  */
  digits = 6,
  /* Error text */
  errorText,
}) => (
  <VStack space={10}>
    <Box alignItems="center">
      <Text>{title}</Text>
      <Text variant="body-md" textAlign="center">
        {description}
      </Text>
    </Box>

    <VStack space={6}>
      <Box alignItems="center">
        <CodeField
          value={value}
          cellCount={digits}
          autoFocus={true}
          keyboardType="number-pad"
          onChangeText={(val) => {
            setValue(val);
          }}
          renderCell={({ index, symbol, isFocused }) => (
            <Box
              key={index}
              width={12}
              height={12}
              backgroundColor="primaryDark.20"
              alignItems="center"
              justifyContent="center"
              marginRight={index + 1 === digits ? 0 : 2}
              borderRadius={4}
              borderWidth={errorText && 2}
              borderColor={errorText && colors.secondaryFour[80]}
            >
              <Text variant="heading-sm">
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </Box>
          )}
        />
      </Box>
      {errorText ? (
        <Text variant="body-sm" color="error" textAlign="center">
          {errorText}
        </Text>
      ) : null}
    </VStack>
  </VStack>
);
