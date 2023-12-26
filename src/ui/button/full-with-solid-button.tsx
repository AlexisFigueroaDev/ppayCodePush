import React, { FC } from 'react';

import { Button } from 'native-base';

import { colors } from '@theme/foundations/colors';
import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { FullWidthSolidButtonProps } from './types';
import { Icon } from '../icon';

const BLANK_CHARACTER = 'ㅤ';

export const FullWidthSolidButton: FC<FullWidthSolidButtonProps> = ({
  /** Text to be displayed inside button. */
  children,
  /** Define button with icon name. */
  iconName,
  /** Diferent variants for button if dont use pass primary | secondary | tertiary */
  variant = 'primary',
  /** Action function. */
  onPress,
  /** If true, disable all interactions for this component. */
  isDisabled,
  /** If true, show a loadign with opacity. */
  isLoading,
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
    <Button
      size="lg"
      leftIcon={
        iconName ? (
          <Icon
            name={iconName}
            color={
              isDisabled
                ? 'textLight'
                : variant === 'tertiary' || variant === 'secondary'
                ? 'primary'
                : 'white'
            }
            size="24"
          />
        ) : undefined
      }
      variant={variant}
      onPress={_onPress}
      isDisabled={isDisabled}
      isLoading={isLoading}
      _spinner={{
        color:
          variant === 'primary'
            ? colors.backgrounds['0']
            : colors.primary['80'],
      }}
      // This is used to prevent button from resizing on loading
      isLoadingText={BLANK_CHARACTER}
      width="full"
      testID={testID}
    >
      {children}
    </Button>
  );
};
