import React, { FC } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { Flex, Checkbox as NBCheckbox, HStack, VStack } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { CheckboxProps } from './types';
import { Text } from '../text';

const MemoizedNBCheckbox = React.memo(NBCheckbox);

export const Checkbox: FC<CheckboxProps> = React.memo(
  ({
    /* Disables checkbox */
    isDisabled = false,
    /* Focused checkbox */
    isFocused = false,
    /* Sets if checkbox is checked when it renders */
    defaultIsChecked = false,
    /* title */
    title,
    /** subtitle */
    subtitle,
    /* Value from checkbox value attribute */
    value,
    /* Customizable icon prop */
    icon = 'Tick',
    /* accessibility Label */
    accessibilityLabel,
    /* function that is executed when the state of the checkbox changes */
    onChange,
    /* boolean that manage current logic */
    isChecked = undefined,
    childrenText,
    /** testID */
    testID,
    isTouchable = true,
  }) => {
    const defaultAccessibilityLabel = `${title} ${
      subtitle ? `- ${subtitle}` : ''
    }`;
    const _onChange = useTrackingContextFunction(
      onChange || (() => {}),
      'ev_cta',
      {
        element: 'Checkbox',
        click_text: title || subtitle || icon,
        variant: isChecked ? '1' : '0',
        test_id: testID,
      },
    );

    return (
      <Flex direction="row" alignItems="center" paddingTop={5}>
        <HStack space={3} alignItems="center">
          {isTouchable ? (
            <MemoizedNBCheckbox
              {...{ isChecked }}
              isDisabled={isDisabled}
              isFocused={isFocused}
              defaultIsChecked={defaultIsChecked}
              value={value}
              _icon={{ as: icon, color: 'white' }}
              accessibilityLabel={
                accessibilityLabel || defaultAccessibilityLabel
              }
              onChange={_onChange}
              testID={testID}
            />
          ) : (
            <TouchableWithoutFeedback onPress={_onChange}>
              <MemoizedNBCheckbox
                {...{ isChecked }}
                isDisabled={isDisabled}
                isFocused={isFocused}
                defaultIsChecked={defaultIsChecked}
                value={value}
                _icon={{ as: icon, color: 'white' }}
                accessibilityLabel={
                  accessibilityLabel || defaultAccessibilityLabel
                }
                testID={testID}
              />
            </TouchableWithoutFeedback>
          )}

          {childrenText ? (
            <VStack space={0}>{childrenText}</VStack>
          ) : (
            <VStack space={0}>
              <Text variant={subtitle ? 'bodyBold-md' : 'body-md'}>
                {title}
              </Text>
              {subtitle ? <Text variant="body-sm">{subtitle}</Text> : null}
            </VStack>
          )}
        </HStack>
      </Flex>
    );
  },
);

Checkbox.displayName = 'Checkbox';
