import React, { FC } from 'react';

import { Pressable, Box } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { VariableWidthAlphaButtonProps } from './types';
import { Text } from '../text';

export const VariableWidthAlphaButton: FC<VariableWidthAlphaButtonProps> = ({
  /** Text to be displayed inside alpha button. */
  children,
  /** Button size. */
  size = 'small',
  /** Action function. */
  onPress,
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
      onPress={_onPress}
      variant={`variable-width-alpha-${size}`}
      testID={testID}
    >
      <Box paddingTop="1px">
        <Text maxFontMultiplier={1.4} variant="bodyBold-sm" color="white">
          {children}
        </Text>
      </Box>
    </Pressable>
  );
};
