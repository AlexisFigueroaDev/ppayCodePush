import React, { FC } from 'react';

import { Pressable } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { ToggleProps, ToggleFontSizes, togglePy, togglePx } from './types';
import { Text } from '../text';

export const ToggleButton: FC<ToggleProps> = ({
  /** display text inside toggle button */
  children,
  /** avaliable button sizes */
  size = 'sm',
  /** on Press function for the button */
  onPress,
  /** disables or enables component w */
  isDisabled = false,
  /** testID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Button',
    click_text: children,
    test_id: testID,
  });

  return (
    <Pressable
      isDisabled={isDisabled}
      onPress={_onPress}
      py={togglePy[size]}
      px={togglePx[size]}
      variant="toggle"
      testID={testID}
    >
      <Text
        textAlign="center"
        variant={ToggleFontSizes[size]}
        color={isDisabled ? 'white' : 'primary'}
      >
        {children}
      </Text>
    </Pressable>
  );
};
