import React, { FC, useCallback, useEffect, useReducer, useState } from 'react';
import { Keyboard, Platform } from 'react-native';

import { Box, FormControl, TextArea as NBTextArea } from 'native-base';

import { textAreaReducer } from './reducer';
import { TextAreaProps } from './types';
import { Text as ThemedText } from '../../theme/components/text';
import { colors } from '../../theme/foundations/colors';
import { VStack } from '../layout';
import { Text } from '../text';

export const TextArea: FC<TextAreaProps> = React.memo(
  ({
    /* The label text displayed above the textarea. */
    label,
    /* The caption text displayed below the textarea (optional). */
    caption,
    /* The value of the textarea */
    value,
    /* The callback function called when the textarea value changes. */
    onChange,
    /* The error message to display when there is an error (optional) */
    errorMessage,
    /* A boolean flag indicating whether the textarea is disabled (default: false) */
    isDisabled = false,
    /** testId */
    testID,
  }) => {
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);

    // Initialize component state using useReducer
    const [state, dispatch] = useReducer(textAreaReducer, {
      borderColor: colors.primaryDark[40],
      labelColor: 'textLight',
      captionColor: 'text',
      hasError: false,
      isDisabled: false,
    });

    // Memoize toggleFocus to prevent unnecessary re-rendering
    const setFocus = useCallback(
      (isFocused: boolean) => {
        dispatch({
          type: isFocused ? 'FOCUS' : 'BLUR',
          payload: { isDisabled, hasError: !!errorMessage },
        });
      },
      [errorMessage, isDisabled],
    );

    // Dispatch action to update errorMessage and isDisabled state when received from props
    useEffect(() => {
      dispatch({
        payload: { isDisabled, hasError: !!errorMessage },
      });
    }, [errorMessage, isDisabled]);

    // Extract the state variables from the state object
    const { borderColor, labelColor, captionColor } = state;

    function onKeyboardWillShow(): void {
      setIsScrollEnabled(false);
    }

    function onKeyboardDidShow(): void {
      setIsScrollEnabled(true);
    }

    // This makes text area scrollable. While maintaining the functionality of the keyboard.
    // Because, for some reason the keyboard works properly for multiline inputs if scroll is disabled.
    useEffect(() => {
      const subKWS = Keyboard.addListener(
        'keyboardWillShow',
        onKeyboardWillShow,
      );
      const subKDS = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);

      return () => {
        subKWS.remove();
        subKDS.remove();
      };
    }, []);

    return (
      <VStack space={1}>
        <Box
          variant="text-area"
          borderColor={borderColor}
          backgroundColor={isDisabled ? 'primaryDark.20' : undefined}
          height={Platform.select({ android: 112, ios: 120 })}
        >
          <FormControl.Label pl={4} pb={0}>
            <Text variant="bodySemi-sm" color={labelColor}>
              {label}
            </Text>
          </FormControl.Label>
          <NBTextArea
            autoCompleteType={undefined}
            value={value}
            onChangeText={onChange}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            isDisabled={isDisabled}
            isInvalid={!!errorMessage}
            // TODO: Remove hardcoded values to theme components _text
            fontSize={ThemedText.variants['body-md'].fontSize}
            fontWeight={ThemedText.variants['body-md'].fontWeight as number}
            lineHeight={ThemedText.variants['body-md'].lineHeight}
            testID={testID}
            multiline
            totalLines={3}
            numberOfLines={3}
            scrollEnabled={isScrollEnabled}
          />
        </Box>
        {(!!caption || !!errorMessage) && (
          <Box px={4}>
            <Text variant="body-sm" color={captionColor}>
              {errorMessage || caption}
            </Text>
          </Box>
        )}
      </VStack>
    );
  },
);
TextArea.displayName = 'TextArea';
