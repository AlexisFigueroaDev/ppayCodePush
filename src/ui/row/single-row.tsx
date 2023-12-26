import React, { FC } from 'react';

import { Pressable, HStack, Image, Box } from 'native-base';

import { BadgeLabel } from '@ui/badge';
import { Pill } from '@ui/pill';

import { RowContainer } from './row-container';
import { SingleLineRowSkeleton } from './skeleton/single-row-skeleton';
import { SingleRowType, LARGE, BODY } from './type';
import {
  amountToCurrency,
  amountToCurrencyWithoutDecimals,
} from './utils/formatters';
import { Icon, KeyIconColors } from '../icon';
import { Text } from '../text';

export const SingleRow: FC<SingleRowType> = ({
  /* type of style  */
  variant = LARGE,
  /* Have icon */
  icon,
  /* Left icon color */
  iconColor = 'info',
  /* Title to show  */
  title,
  /* Right title to show  */
  rightTitle,
  /* Right title is bold  */
  isRightTitleBold,
  /* Right Title Color Text */
  rightTitleColor = 'text',
  /* Amount (right) to show  */
  amount,
  /* Right icon to show  */
  rightIcon,
  /* Right badge text to show  */
  badgeText,
  /* Right pill text to show  */
  rightPill,
  /* Function on press */
  onPress,
  /* Data is loadig */
  isLoading,
  /* Title Variant */
  variantTitle = BODY,
  /* Text Size */
  textSize = 'md',
  isTruncated = false,
  /* Color Amount */
  colorAmount = 'text',
  isBorder = false,
  textColor = 'text',
  rightIconColor = 'text',
  imgUri,
  fallbackImage = 'Document',
  /* if is true, show decimals when amount is int  */
  withOutDecimalsAmountInt = false,
  /** disabled state */
  isDisabled = false,
}) => {
  const MAX_FONT_MULTIPLIER = 1.4;
  const IMG_STYLES = {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#E3E5F6',
  };
  const opacity = isDisabled ? 0.5 : 1.0;

  const content = (
    <RowContainer
      variant={`${variant}-single-row`}
      isBorder={isBorder}
      component={
        <>
          <HStack space={2} alignItems="center" flex={1} opacity={opacity}>
            {icon ? (
              <HStack alignItems="center">
                <Icon
                  name={icon}
                  color={isDisabled ? 'disabled' : (iconColor as KeyIconColors)}
                  size="24"
                />
              </HStack>
            ) : null}
            {imgUri ? (
              <Box style={IMG_STYLES} opacity={opacity}>
                <Image
                  source={{ uri: imgUri }}
                  size={8}
                  resizeMethod="auto"
                  resizeMode="center"
                  borderRadius="full"
                  borderWidth={1}
                  fallbackElement={
                    <Box
                      borderColor="#E3E5F6"
                      borderWidth={1}
                      padding={1}
                      borderRadius="full"
                    >
                      <Icon name={fallbackImage} />
                    </Box>
                  }
                />
              </Box>
            ) : null}
            <HStack flexShrink={1} textAlign="left">
              <Text
                maxFontMultiplier={MAX_FONT_MULTIPLIER}
                variant={`${variantTitle}-${textSize}`}
                color={textColor}
                isTruncated={isTruncated}
              >
                {title}
              </Text>
            </HStack>
          </HStack>
          <HStack space={2} alignItems="center">
            <HStack
              space={2}
              paddingX={2}
              alignItems="center"
              justifyContent="space-between"
            >
              {rightTitle ? (
                <Text
                  maxFontMultiplier={MAX_FONT_MULTIPLIER}
                  color={isDisabled ? 'disabled' : rightTitleColor}
                  variant={
                    isRightTitleBold
                      ? `bodyBold-${textSize}`
                      : `body-${textSize}`
                  }
                >
                  {rightTitle}
                </Text>
              ) : null}

              {amount || amount === 0 ? (
                <Text
                  variant="bodyBold-lg"
                  color={isDisabled ? 'disabled' : colorAmount}
                  maxFontMultiplier={MAX_FONT_MULTIPLIER}
                >
                  {withOutDecimalsAmountInt
                    ? amountToCurrencyWithoutDecimals(amount)
                    : amountToCurrency(amount)}
                </Text>
              ) : null}

              {rightPill?.title ? (
                <Pill
                  variant={rightPill?.variant}
                  size="xs"
                  type={rightPill?.type}
                >
                  {rightPill.title}
                </Pill>
              ) : null}

              {rightIcon ? (
                <Icon
                  name={rightIcon}
                  size="16"
                  color={isDisabled ? 'disabled' : rightIconColor}
                />
              ) : null}

              {badgeText ? (
                <BadgeLabel variant="news-darker" textVariant="bodyBold-xs">
                  {badgeText}
                </BadgeLabel>
              ) : null}
            </HStack>
          </HStack>
        </>
      }
    />
  );

  if (isLoading) {
    return <SingleLineRowSkeleton isBorder={isBorder} variant={variant} />;
  }

  if (onPress) {
    return (
      <Pressable isDisabled={isDisabled} onPress={onPress}>
        {content}
      </Pressable>
    );
  }

  return <>{content}</>;
};
