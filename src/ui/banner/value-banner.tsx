import React, { FC } from 'react';

import { Box, Flex, Pressable } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { ValueBannerProps, valueBannerBgColorBy } from './types';
import { colors } from '../../theme/foundations/colors';
import { hexToRgba } from '../../theme/foundations/opacity';
import { BadgeLabel } from '../badge';
import { Icon } from '../icon';
import { Illustration } from '../illustrations';
import { VStack } from '../layout';
import { Text } from '../text';

export const ValueBanner: FC<ValueBannerProps> = ({
  /** string with the title value */
  title,
  /** description of the banner */
  label,
  /** badge label text */
  badgeLabel,
  /** last child string */
  buttonText,
  /** set of available ilustration */
  ilustration = 'CardShop',
  /** set of variants, define the color behavior */
  variant = 'white',
  /** pressable function */
  buttonOnClick = () => {},
  /** testID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(buttonOnClick, 'ev_cta', {
    element: 'Banner',
    click_text: buttonText || title,
    layer: variant,
    test_id: testID,
  });

  return (
    <Pressable
      bg={valueBannerBgColorBy[variant]}
      variant="value-banner"
      onPress={_onPress}
      borderRadius="4px"
      borderWidth={variant === 'white' ? '1' : '0'}
      borderColor={hexToRgba(colors.primaryDark[30], 'pure')}
      testID={testID}
    >
      {badgeLabel ? (
        <Box position="absolute">
          <BadgeLabel variant="news" borderRadius="4px">
            {badgeLabel}
          </BadgeLabel>
        </Box>
      ) : null}
      <Flex flex="0.9">
        <VStack space={3}>
          <VStack space={0.5}>
            <Text variant="caps-xxs">{title?.toUpperCase()}</Text>
            <Text variant="body-sm">{label}</Text>
          </VStack>

          <Box flexDirection="row" alignItems="center">
            <Text
              variant="bodyBold-xs"
              color={variant === 'white' ? 'primary' : 'text'}
            >
              {buttonText}
            </Text>
            <Icon
              name="ChevronRight"
              size="8"
              color={variant === 'white' ? 'primary' : 'text'}
            />
          </Box>
        </VStack>
      </Flex>

      <Illustration name={ilustration} />
    </Pressable>
  );
};
