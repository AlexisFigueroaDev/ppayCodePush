import React, { FC } from 'react';

import { IconButton as NBIconButton } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { IconButtonProps, IconButtonSizes, MD } from './types';
import { Icon } from '../icon/icon';

export const IconButtonTransparent: FC<IconButtonProps> = ({
  /** Define icon name. */
  name,
  /** Icon button size */
  size = MD,
  /** Action function. */
  onPress,
  /** If true, disable all interactions for this component. */
  isDisabled,
  /** Dark or light variants for different backgrounds  */
  variant = 'light',
  /** Icon color */
  color = 'text',
  /** testID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Icon',
    click_text: name,
    layer: variant,
    test_id: testID,
  });

  return (
    <NBIconButton
      size={size}
      icon={<Icon name={name} color={color} size={IconButtonSizes[size]} />}
      onPress={_onPress}
      isDisabled={isDisabled}
      variant={variant}
      testID={testID}
    />
  );
};
