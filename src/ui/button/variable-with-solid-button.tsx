import React, { FC } from 'react';

import { Button } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { VariableWithSolidButtonProps } from './types';
import { Icon } from '../icon';

export const VariableWithSolidButton: FC<VariableWithSolidButtonProps> = ({
  /** Text to be displayed inside button. */
  children,
  /** Button variants. */
  variant,
  /** Icon name for icon. */
  iconName,
  /** Action function. */
  onPress,
  /** If true, disable all interactios for button */
  isDisabled,
  /** Button size. */
  size,
  /** If is necessary you can add a right icon */
  rightIcon,
  /** If is necessary you can add a padding Y = 1 */
  minPaddingY = false,
  /** testID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Button',
    click_text: children || iconName || '',
    test_id: testID,
  });

  return (
    <Button
      py={minPaddingY ? 1 : undefined}
      _text={{
        maxFontSizeMultiplier: 1.4,
      }}
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
            size="16"
          />
        ) : undefined
      }
      onPress={_onPress}
      width="auto"
      variant={variant}
      isDisabled={isDisabled}
      size={size}
      rightIcon={
        rightIcon ? (
          <Icon
            name={rightIcon}
            color={
              isDisabled
                ? 'textLight'
                : variant === 'tertiary' || variant === 'secondary'
                ? 'primary'
                : 'white'
            }
            size="16"
          />
        ) : undefined
      }
      testID={testID}
    >
      {children}
    </Button>
  );
};
