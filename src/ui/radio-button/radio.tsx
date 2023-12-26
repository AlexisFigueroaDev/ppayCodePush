import React, { FC } from 'react';

import { Flex, Radio, VStack, HStack } from 'native-base';

import { RadioProps } from './types';
import { Text } from '../text';

const MemoRadio = React.memo(Radio);

export const RadioButton: FC<RadioProps> = ({
  /** string for the label  */
  label,
  /** string for the subtitle  */
  subtitle,
  /** boolean indicating whether the radio button is disabled */
  isDisabled,
  /** boolean indicating whether the radio button is currently focused */
  isFocused,
  /** value to be assigned to the radio button */
  value,
  /* accessibility Label */
  accessibilityLabel = '',
}) => (
  <Flex direction="row" alignItems="center" paddingY={1}>
    <HStack space={3} alignItems="center">
      <MemoRadio
        value={value}
        isDisabled={isDisabled}
        isFocused={isFocused}
        accessibilityLabel={accessibilityLabel}
      />
      <VStack space={0}>
        <Text variant={subtitle ? 'bodyBold-md' : 'body-md'}>{label}</Text>
        {subtitle && <Text variant="body-sm">{subtitle}</Text>}
      </VStack>
    </HStack>
  </Flex>
);
