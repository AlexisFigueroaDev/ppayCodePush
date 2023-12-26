import React, { FC } from 'react';

import { HStack, Pressable, VStack } from 'native-base';

import { Text } from '@ui/text';
import { formatCurrency } from '@utils/formatCurrency';

import { BalanceProps, StatusProps } from './types';

const Status: FC<StatusProps> = (props) => {
  if (props?.variant === 'error')
    return (
      <HStack space="1">
        <Text variant="bodyBold-sm" color="error">
          {props?.title}
        </Text>
      </HStack>
    );
  return (
    <HStack space="1">
      <Text variant="body-sm">{props?.title}</Text>
      <Text variant="bodyBold-sm">
        {props?.amount && formatCurrency(props?.amount, 2)}
      </Text>
    </HStack>
  );
};

export const Balance: FC<BalanceProps> = ({
  status,
  description,
  actionable,
}) => (
  <VStack
    alignItems="center"
    backgroundColor="primaryDark.10"
    justifyContent="center"
    padding="2"
    space="1"
    width="full"
  >
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    {status && <Status {...status} />}
    <HStack space="1">
      {description && <Text variant="body-sm">{description}</Text>}
      {actionable && (
        <Pressable onPress={actionable?.action}>
          <Text variant="bodyBold-sm" color="primary">
            {actionable?.text}
          </Text>
        </Pressable>
      )}
    </HStack>
  </VStack>
);
