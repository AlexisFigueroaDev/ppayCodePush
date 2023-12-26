import React, { FC } from 'react';

import {
  Box,
  Flex,
  Pressable,
  IconButton as NBIconButton,
  VStack,
  HStack,
  Image,
} from 'native-base';

import { colors } from '@theme/foundations/colors';
import { LogoPlaceholder } from '@ui/logo-placeholder';

import { DoubleLineRowProps, setVariantBy } from './type';
import { Avatar } from '../avatar';
import { Icon } from '../icon';
import { Pill } from '../pill';
import { Text } from '../text';

export const DoubleLineRow: FC<DoubleLineRowProps> = ({
  /** string title */
  title,
  /** highlighted text string */
  highlightedText,
  /** string with a short description */
  description,
  /** user avatar url */
  avatarUri,
  /** string with a available icon */
  leftIcon,
  /** size left icon */
  leftIconSize = '24',
  /** set of horizontal padding */
  paddingX = '0',
  /** function fire once component has been pressed */
  onPress,
  /** string with the user name */
  userName,
  /** string to show the error message */
  errorMsg,
  /** boolean to make bolder the description data */
  descriptionBold = false,
  /** string with a available right icon */
  rightIcon = 'ChevronRight',
  /** string with a available right icon */
  onPressRightIcon,
  /** size right icon */
  iconSize = '16',
  /** Pill variant to show */
  pillVariant = 'info',
  /** Pill title to show */
  pillTitle,
  pillType = 'solid',
  colorDescription = 'text',
  /** boolean to activate buttonline */
  isBorder = false,
  /** boolean to truncate title */
  isTitleTruncated = false,
  /** boolean to truncate subtitle */
  isDescriptionTruncated = false,
  /** description number of lines */
  descriptionNoOfLines = 1,
  /** highlighted text number of lines */
  highlightedTextNoOfLines = 1,
  /** boolean to truncate highlighted text */
  isHighlightedTextTruncated = false,
  /** logo url */
  logo,
  /** recibe uri for image */
  imgUri,
  /** disabled state */
  isDisabled = false,
}) => {
  const BORDER_STYLES = {
    borderColor: colors.primaryDark[30],
    borderBottomWidth: 1,
  };
  const IMG_STYLES = {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#E3E5F6',
  };
  const MAX_FONT_MULTIPLIER = 1.2;
  const opacity = isDisabled ? 0.5 : 1.0;

  return (
    <Pressable
      variant={onPress ? 'with-opacity-interaction' : undefined}
      onPress={onPress}
      w="full"
      isDisabled={isDisabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(isBorder ? BORDER_STYLES : null)}
    >
      <Flex py={errorMsg ? 2 : 4} px={paddingX} variant="double-line-row">
        <HStack space={2} alignItems="center">
          {leftIcon || userName || logo ? (
            <Flex justifyContent="center" opacity={opacity}>
              {leftIcon && (
                <Icon
                  name={leftIcon}
                  color={isDisabled ? 'disabled' : 'blurple'}
                  size={leftIconSize}
                />
              )}
              {userName && <Avatar name={userName} uri={avatarUri} />}
              {logo && (
                <LogoPlaceholder uri={logo} alt="placeholder-double-line-row" />
              )}
            </Flex>
          ) : null}
          {imgUri ? (
            <Flex justifyContent="center" ml={2} opacity={opacity}>
              <Box style={IMG_STYLES}>
                <Image
                  source={{ uri: imgUri }}
                  size={8}
                  resizeMethod="auto"
                  resizeMode="center"
                  fallbackElement={
                    <Box
                      borderColor="#E3E5F6"
                      borderWidth={1}
                      padding={1}
                      borderRadius="full"
                    >
                      <Icon name="Document" />
                    </Box>
                  }
                />
              </Box>
            </Flex>
          ) : null}
          <Flex flex={1}>
            <VStack space={1}>
              <Box flexDirection="row" justifyContent="space-between">
                <Flex flex={1}>
                  <Text
                    variant={setVariantBy(!!descriptionBold, !!errorMsg)}
                    color={isDisabled ? 'disabled' : 'text'}
                    isTruncated={isTitleTruncated}
                    maxFontMultiplier={MAX_FONT_MULTIPLIER}
                  >
                    {title}
                  </Text>
                  {highlightedText ? (
                    <Box paddingY={0.5}>
                      <Text
                        variant="bodyBold-sm"
                        color={isDisabled ? 'disabled' : 'primary'}
                        noOfLines={highlightedTextNoOfLines}
                        isTruncated={isHighlightedTextTruncated}
                        maxFontMultiplier={MAX_FONT_MULTIPLIER}
                      >
                        {highlightedText}
                      </Text>
                    </Box>
                  ) : null}
                  {!!description && (
                    <Text
                      variant={descriptionBold ? 'bodyBold-md' : 'body-sm'}
                      color={isDisabled ? 'disabled' : colorDescription}
                      isTruncated={isDescriptionTruncated}
                      noOfLines={descriptionNoOfLines}
                      maxFontMultiplier={MAX_FONT_MULTIPLIER}
                    >
                      {description}
                    </Text>
                  )}
                </Flex>
                {pillTitle ? (
                  <Flex direction="row" alignItems="center">
                    <Pill
                      variant={isDisabled ? 'neutral' : pillVariant}
                      size="xs"
                      type={isDisabled ? 'alpha' : pillType}
                    >
                      {pillTitle}
                    </Pill>
                  </Flex>
                ) : null}
              </Box>

              {!!errorMsg && (
                <HStack space={2}>
                  <Flex>
                    <Icon name="Alert" color="error" size="16" />
                  </Flex>
                  <Flex flex={1}>
                    <Text
                      variant="body-sm"
                      color="error"
                      maxFontMultiplier={MAX_FONT_MULTIPLIER}
                    >
                      {errorMsg}
                    </Text>
                  </Flex>
                </HStack>
              )}
            </VStack>
          </Flex>
          {onPressRightIcon && !isDisabled ? (
            <Flex justifyContent="center" opacity={opacity}>
              <NBIconButton
                icon={<Icon name={rightIcon} size={iconSize} />}
                disabled={isDisabled}
                onPress={onPressRightIcon}
              />
            </Flex>
          ) : null}
        </HStack>
      </Flex>
    </Pressable>
  );
};
