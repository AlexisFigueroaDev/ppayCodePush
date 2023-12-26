import React, { FC } from 'react';

import { Button, Center } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { SolidButtonProps } from './types';
import { Icon } from '../icon';

export const SolidButton: FC<SolidButtonProps> = ({
  /** string for text button */
  children,
  /** variant fot type of button */
  variant = 'primary',
  /** string for icon name */
  icon,
  /** function to be fire once the button has been pressed */
  onPress,
  /** string for size of button */
  size = 'md',
  /** boolean value to define when component is disabled */
  isDisabled = false,
  /** testID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Button',
    click_text: children,
    layer: variant,
    test_id: testID,
  });

  return (
    <Center>
      <Button
        disabled={isDisabled}
        size={size}
        variant={isDisabled ? `${variant}-disabled` : variant}
        onPress={_onPress}
        leftIcon={
          icon && variant !== 'tertiary' ? <Icon name={icon} /> : undefined
        }
        _text={{
          maxFontSizeMultiplier: 1.4,
        }}
        testID={testID}
      >
        {children}
      </Button>
    </Center>
  );
};
