import React, { FC } from 'react';

import { Pressable, Flex } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { CreditCardButtonProps } from './types';
import { Icon } from '../icon';
import { Text } from '../text';

export const CreditCardButton: FC<CreditCardButtonProps> = ({
  /** Icon name for icon. */
  iconName,
  /** Las number for credit card. */
  lastNumbers,
  /** text for no credit card case. */
  text,
  /** If true, disable all interactios for button */
  isDisabled,
  /** Action function. */
  onPress,
  /** testID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Button',
    click_text: text || iconName || '',
    test_id: testID,
  });

  return (
    <Pressable
      variant="credit-card"
      onPress={_onPress}
      isDisabled={isDisabled}
      testID={testID}
    >
      {iconName && (lastNumbers || text) ? (
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Icon name={iconName} color="white" size="24" />
          {lastNumbers ? (
            <Text variant="bodyBold-xs" color="white">
              {`**** ${lastNumbers}`}
            </Text>
          ) : null}
          {text ? (
            <Text variant="bodyBold-xs" color="white">
              {text}
            </Text>
          ) : null}
        </Flex>
      ) : text ? (
        <Flex flexDirection="row" justifyContent="center" py="4px">
          <Text variant="bodyBold-xs" color="white">
            {text}
          </Text>
        </Flex>
      ) : iconName ? (
        <Flex flexDirection="row" justifyContent="center">
          <Icon name={iconName} color="white" size="24" />
        </Flex>
      ) : null}
    </Pressable>
  );
};
