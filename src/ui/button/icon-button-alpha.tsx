import React, { FC } from 'react';

import { IconButton as NBIconButton } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { IconButtonAlphaProps } from './types';
import { Icon } from '../icon/icon';

export const IconButtonAlpha: FC<IconButtonAlphaProps> = ({
  /** Define icon name. */
  name,
  /** Action function. */
  onPress,
  /** testID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Icon',
    click_text: name,
    test_id: testID,
  });

  return (
    <NBIconButton
      size={10}
      icon={<Icon name={name} color="white" size="20" />}
      onPress={_onPress}
      testID={testID}
    />
  );
};
