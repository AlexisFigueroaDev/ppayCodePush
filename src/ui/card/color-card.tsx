import React, { FC } from 'react';

import { Box, Pressable } from 'native-base';

import { ColorCardProps, cardBgColorBy, widthValueBy } from './types';
import { colors } from '../../theme/foundations/colors';
import { Icon } from '../icon';
import { VStack } from '../layout';
import { Pill } from '../pill';
import { BalanceRow } from '../row/balance-row';
import { Text } from '../text';

export const ColorCard: FC<ColorCardProps> = ({
  /** string to set icon model  */
  iconName = 'DollarColor',
  /** string for the pill */
  label,
  /** title of the card */
  title,
  /** string to set description text */
  description,
  /** express the amount in pesos */
  amount,
  /** set of variants that defines the bgColor behavior */
  variant = 'light',
  /** set of type, defines the components width */
  type = 'full',
  /** function to be fire */
  buttonOnClick,
  /** set of type, defines the components width */
  isShowBalanceRow = true,
}) => {
  const component = (
    <Box
      width={widthValueBy[type]}
      borderRadius="4"
      p="3"
      bg={cardBgColorBy[variant]}
    >
      <VStack space={3}>
        <VStack space={2}>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              justifyContent="center"
              w="8"
              h="8"
              rounded="full"
              alignItems="center"
              bg={colors.primaryDark[10]}
            >
              <Icon name={iconName} />
            </Box>
            {label && <Pill size="xs">{label}</Pill>}
          </Box>

          <Text variant="body-md">{title}</Text>

          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop="-1"
            marginLeft="-1"
          >
            {type === 'full' && (
              <Pressable
                flexDirection="row"
                alignItems="center"
                onPress={buttonOnClick}
                flex={1}
                justifyContent="space-between"
              >
                {isShowBalanceRow && amount ? (
                  <BalanceRow value={amount} variant="small" isShowAmount />
                ) : null}
                <Box flexDirection="row" alignItems="center">
                  <Box mr={1}>
                    <Text variant="body-xs">Ver más</Text>
                  </Box>
                  <Icon name="ChevronRight" size="8" />
                </Box>
              </Pressable>
            )}
          </Box>
        </VStack>

        {type === 'onboarding' && (
          <VStack space={2}>
            {description && (
              <Box
                h="30"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="flex-start"
                marginTop="-1"
                marginLeft="-1"
              >
                <Box w={90}>
                  <Text variant="body-xs">{description}</Text>
                </Box>
              </Box>
            )}
            {buttonOnClick ? (
              <Pressable
                flexDirection="row"
                alignItems="center"
                onPress={buttonOnClick}
              >
                <Text variant="body-xs">Ver más</Text>
                <Icon name="ChevronRight" size="8" />
              </Pressable>
            ) : null}
          </VStack>
        )}

        {type === 'medium' && (
          <Pressable
            flexDirection="row"
            alignItems="center"
            onPress={buttonOnClick}
          >
            <Text variant="body-xs">Ver más</Text>
            <Icon name="ChevronRight" size="8" />
          </Pressable>
        )}
      </VStack>
    </Box>
  );

  if (buttonOnClick) {
    return (
      <Pressable
        flexDirection="row"
        alignItems="center"
        onPress={buttonOnClick}
      >
        {component}
      </Pressable>
    );
  }
  return <>{component}</>;
};
