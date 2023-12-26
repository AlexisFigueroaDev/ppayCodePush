import React, { FC } from 'react';

import { Box, Pressable } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { SkeletonButtonCard } from './skeletons/horizontal-card-button-skeleton';
import { ButtonCardProps, buttonCardColors } from './types';
import { Icon } from '../icon';
import { Text } from '../text';

export const HorizontalCardButton: FC<ButtonCardProps> = ({
  /** Text of the button card */
  children,
  /** Event executed whenever the card is pressed */
  onPress,
  /** Icon from the button card */
  icon = 'Rocket',
  /** Variant from the button card */
  variant = 'solid',
  /** Allows you to choose disabled or enabled styles */
  isDisabled = false,
  /** Allows you to choose disabled or enabled styles */
  isLoading = false,
  /** Test ID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Button',
    click_text: children || icon,
    layer: variant,
    test_id: testID,
  });

  if (isLoading) return <SkeletonButtonCard />;

  return (
    // TODO: Fix sizes of components by getting them into a container
    <Pressable
      isDisabled={isDisabled}
      onPress={_onPress}
      borderStyle={variant}
      variant="horizontal-button-card"
      flex="0.5"
      flexDirection="row"
      testID={testID}
    >
      <Box flex={1}>
        <Text
          variant="bodySemi-sm"
          color={buttonCardColors[variant]}
          maxFontMultiplier={1.4}
          noOfLines={2}
        >
          {children}
        </Text>
      </Box>
      <Box flex={1} flexDirection="row">
        <Box width="6" />
        <Box flex={1} alignItems="flex-end">
          <Icon name={icon} size="32" />
        </Box>
      </Box>
    </Pressable>
  );
};
