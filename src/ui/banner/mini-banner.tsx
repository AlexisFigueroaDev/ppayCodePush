import React, { FC } from 'react';

import { Pressable } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { MiniBannerProps } from './types';
import { Text } from '../text';

export const MiniBanner: FC<MiniBannerProps> = ({
  /** description of the banner */
  label,
  /** last child string */
  buttonText,
  /** pressable function */
  buttonOnClick = () => {},
  /** testID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(buttonOnClick, 'ev_cta', {
    element: 'Banner',
    click_text: buttonText,
    test_id: testID,
  });

  return (
    <Pressable variant="mini-banner" onPress={_onPress} testID={testID}>
      <Text variant="body-xs">{label}</Text>

      <Text variant="bodyBold-xs" color="primary">
        {buttonText}
      </Text>
    </Pressable>
  );
};
