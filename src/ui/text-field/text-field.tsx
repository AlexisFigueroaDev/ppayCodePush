/* eslint-disable react-native/no-inline-styles */
import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputFocusEventData,
} from 'react-native';

import { FormControl, HStack, Text, VStack } from 'native-base';
import { TextInputMask } from 'react-native-masked-text';

import { colors as Colors } from '@theme/foundations/colors';
import { fontConfig } from '@theme/foundations/font';

import { INPUT_COLORS, InputColors, TextFieldProps, maskFormat } from './types';
import { IconButton } from '../button';
import { Icon } from '../icon';

export const TextField: FC<TextFieldProps> = ({
  inputDefaultValue,
  errorMessage,
  helperText,
  isDisabled = false,
  isInvalid,
  isRequired,
  onChangeText,
  placeholder,
  title,
  value,
  type = 'text',
  rightIcon,
  onIconPress,
  autoFocus = false,
  format = 'default',
  testID,
  onBlur: _onBlur,
}: TextFieldProps) => {
  const [colors, setColors] = useState<InputColors>(INPUT_COLORS.normal);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsFocused(!!autoFocus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isInvalid) {
      setColors(INPUT_COLORS.error);
    } else if (isDisabled) {
      setColors(INPUT_COLORS.disabled);
    } else if (isFocused) {
      setColors(INPUT_COLORS.focus);
    } else {
      setColors(INPUT_COLORS.normal);
    }
  }, [isInvalid, isFocused, isDisabled]);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      _onBlur?.(e);
    },
    [_onBlur],
  );

  return (
    <FormControl
      isRequired={isRequired}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
    >
      <VStack space="1">
        <HStack
          space={2}
          pl={4}
          pr={2}
          paddingY={2}
          justifyContent="space-between"
          alignItems="center"
          borderWidth={isFocused || isInvalid ? 2 : 1}
          borderRadius="sm"
          borderColor={colors.border}
          backgroundColor={colors.bg}
        >
          <VStack flex={1}>
            {title ? (
              <FormControl.Label padding={0} margin={0}>
                <Text variant="bodySemi-sm" color={colors.title}>
                  {title}
                </Text>
              </FormControl.Label>
            ) : null}
            <TextInputMask
              type={type === 'text' ? 'custom' : 'only-numbers'}
              options={{
                mask: maskFormat[format],
              }}
              value={value}
              onChangeText={onChangeText}
              focusable={isFocused}
              autoFocus={autoFocus}
              onFocus={onFocus}
              onBlur={onBlur}
              defaultValue={inputDefaultValue}
              placeholder={placeholder}
              style={{
                padding: 0,
                margin: 0,
                ...(!isDisabled ? styles.inputMask : styles.inputMaskDisabled),
              }}
              editable={!isDisabled}
              testID={testID}
            />
          </VStack>
          {rightIcon && !isDisabled && value && value?.length > 0 ? (
            onIconPress ? (
              <IconButton.Transparent
                testID="text-field-icon-button-right-icon"
                onPress={onIconPress}
                name={rightIcon}
                size="lg"
              />
            ) : (
              <Icon
                name={rightIcon}
                size={rightIcon === 'Visa' ? '32' : '24'}
              />
            )
          ) : rightIcon === 'Visa' ? (
            <Icon name={rightIcon} size="32" />
          ) : null}
        </HStack>

        {isInvalid && errorMessage ? (
          <FormControl.ErrorMessage paddingLeft="4" m="0">
            {errorMessage}
          </FormControl.ErrorMessage>
        ) : null}
        {!isInvalid && helperText ? (
          <FormControl.HelperText paddingLeft="4" m="0">
            {helperText}
          </FormControl.HelperText>
        ) : null}
      </VStack>
    </FormControl>
  );
};

export const styles = StyleSheet.create({
  inputMask: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    color: Colors.primaryDark[90],
    fontFamily: fontConfig.Jakarta[500].normal,
  },
  inputMaskDisabled: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    color: Colors.primaryDark[60],
    fontFamily: fontConfig.Jakarta[500].normal,
  },
});
