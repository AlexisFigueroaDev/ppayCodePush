import React, { FC } from 'react';

import { Pressable } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { ButtonCardProps, buttonCardColors } from './types';
import { BadgeLabel } from '../badge';
import { Icon } from '../icon';
import { Text } from '../text';

export const ButtonCard: FC<ButtonCardProps> = ({
  /** Text from the button card */
  children,
  /** Event executed whenever the card is pressed */
  onPress,
  /** Icon from the button card */
  icon = 'CellphoneMoneyColor',
  /** Allows you to set the text of the badge */
  badgeText,
  /** Variant from the button card */
  variant = 'solid',
  /** Allows you to choose disabled or enabled styles */
  isDisabled = false,
  /** type of badgelabel available */
  badgeVariant = 'news-button',
  /** Test ID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Button',
    click_text: children || badgeText || icon,
    layer: variant,
    test_id: testID,
  });

  return (
    <Pressable
      isDisabled={isDisabled}
      onPress={_onPress}
      borderStyle={variant}
      variant="button-card"
      testID={testID}
    >
      {badgeText && (
        <BadgeLabel variant={badgeVariant} textVariant="bodyBold-xxs">
          {badgeText}
        </BadgeLabel>
      )}
      <Icon name={icon} />
      <Text
        textAlign="center"
        variant="bodySemi-xs"
        color={buttonCardColors[variant]}
        maxFontMultiplier={1.4}
      >
        {children}
      </Text>
    </Pressable>
  );
};
