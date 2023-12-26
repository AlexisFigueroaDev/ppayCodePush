import React, {FC} from 'react';

import {Box, Stack, Pressable, Skeleton, Flex} from 'native-base';

import {BlanceRowProps, LARGE, SMALL, typeConfig} from './type';
import {splitAmountToInput} from './utils/formatters';
import {dottedNumber} from '../../utils';
import {Icon} from '../icon';
import {Text} from '../text';

export const BalanceRow: FC<BlanceRowProps> = ({
  /*  Amount or vlaue to show */
  value,
  /* if is true show amount, if false show *** */
  isShowAmount = false,
  /* type of currency */
  currency = '$',
  /* type of style  */
  variant = LARGE,
  /* if is loading show skeleton */
  isLoading = false,
  /* action when component is presseable */
  onPress,
}) => {
  const {numbers, decimals} = splitAmountToInput(value);

  const {containerH, numbersVariant, decimalVariant} = typeConfig(variant);

  const content = (
    <>
      <Stack direction="row" alignItems="center" space={0.5}>
        <Text variant={numbersVariant}>
          {currency}
          {isShowAmount ? dottedNumber(numbers) : ' ***'}
        </Text>
        <Box h={containerH} variant={`${variant}-balance-row`}>
          <Text variant={decimalVariant}>{isShowAmount ? decimals : '**'}</Text>
        </Box>
      </Stack>

      {variant === LARGE && onPress && (
        <Box justifyContent="center">
          <Icon name="ChevronRight" size="16" />
        </Box>
      )}
    </>
  );

  if (isLoading) {
    return (
      <Flex variant="balance-row">
        <Box paddingY={2} flex={1}>
          <Skeleton variant={`${variant}-balance-row`} />
        </Box>
        {variant === LARGE && onPress && (
          <Box justifyContent="center" paddingRight={1}>
            <Icon name="ChevronRight" size="16" />
          </Box>
        )}
      </Flex>
    );
  }

  if (onPress && !isLoading && variant !== SMALL) {
    return (
      <Pressable variant="presseable-balance-row" onPress={onPress}>
        {content}
      </Pressable>
    );
  }
  return <Flex variant="balance-row">{content}</Flex>;
};
