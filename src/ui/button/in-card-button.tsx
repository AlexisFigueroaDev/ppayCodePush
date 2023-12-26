import React, { FC } from 'react';

import { Pressable } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { InCardProps } from './types';
import { Icon } from '../icon';
import { Text } from '../text';

export const InCardButton: FC<InCardProps> = ({
  /** label: Text of the InCardButton */
  label,
  /** function executed once InCardButton has been pressed */
  onPress,
  icon = 'ChevronRight',
  /** testID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Button',
    click_text: label || icon,
    test_id: testID,
  });
  return (
    <Pressable variant="in-card" onPress={_onPress} testID={testID}>
      <Text variant="bodySemi-sm" color="primary">
        {label}
      </Text>
      <Icon name={icon} color="primary" size="16" />
    </Pressable>
  );
};
