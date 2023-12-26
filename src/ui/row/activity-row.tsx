/* Poodriamos re-ver esto por que en la view de pago de servicios necesitamos que el
  componente reciba el border y las imagenes.
*/
import React, {FC} from 'react';
import {Dimensions} from 'react-native';

import {Box, Pressable, Flex, Image} from 'native-base';

import {REJECTED, APPROVED, PENDING} from '@constants';

import {ActivityRowProps, colorBy} from './type';
import {Icon} from '../icon';
import {HStack, VStack} from '../layout';
import {Pill} from '../pill';
import {KeyTextColors, Text} from '../text';

export const ActivityRow: FC<ActivityRowProps> = ({
  /** Type of available icon */
  icon,
  /** Title of component */
  title,
  /** Description related with the Activity */
  description,
  /** Description color */
  descriptionColor = 'textLight',
  /** Amount of the Activity */
  amount,
  /** Activity Date */
  date,
  /** Type of available status  */
  status,
  //* function to be fire once ActivityRow has been pressed */
  onPress,
  /** Pill variant to show */
  pillVariant = 'info',
  /** Pill title to show */
  pillTitle,
  /** Pill right title to show */
  pillRightTitle,
  /* color right title */
  pillRightTitleColor = 'primary',
  /** Footer title to show */
  footerTitle,
  /** Footer description to show */
  footerDescription,
  /** uri to get and show images */
  imgUri,
  /** icon for rigth side */
  rightIcon,
}) => {
  const MAX_FONT_MULTIPLIER = 1.4;
  const screenDimensions = Dimensions.get('screen');
  const relation = 2;
  const TITLE_CONTAINER_STYLE = {
    width: screenDimensions.width / relation,
  };

  const getSign = (value: string): string =>
    value?.charAt(0) === '-' ? '-' : '+';

  const formatAmountStyle = (state?: string, value?: string): KeyTextColors => {
    if (!state) return colorBy.default;
    if (state === REJECTED) return colorBy[REJECTED];
    return getSign(value || '') === '+' ? colorBy[APPROVED] : colorBy[PENDING];
  };

  const content = (
    <Box py={3} px={4}>
      <VStack space={3}>
        {pillTitle || pillRightTitle ? (
          <Flex direction="row" justifyContent="space-between">
            {pillTitle ? (
              <Pill variant={pillVariant} size="xs">
                {pillTitle}
              </Pill>
            ) : (
              <Box></Box>
            )}
            {pillRightTitle ? (
              <Text
                maxFontMultiplier={MAX_FONT_MULTIPLIER}
                variant="body-xs"
                color={pillRightTitleColor}>
                {pillRightTitle}
              </Text>
            ) : null}
          </Flex>
        ) : null}
        <Flex direction="row" justifyContent="space-between">
          <HStack space={icon || imgUri ? 2 : 0}>
            <Flex direction="row" alignItems="center">
              {imgUri ? <Image source={{uri: imgUri}} size={6} /> : null}
              {icon ? <Icon name={icon} color="info" size="24" /> : null}
            </Flex>
            <Box
              justifyContent={description === '' ? 'center' : 'flex-start'}
              style={TITLE_CONTAINER_STYLE}>
              <Text
                maxFontMultiplier={MAX_FONT_MULTIPLIER}
                variant="bodyBold-md"
                color="text"
                isTruncated>
                {title}
              </Text>
              {description !== '' ? (
                <Text
                  maxFontMultiplier={MAX_FONT_MULTIPLIER}
                  variant="body-sm"
                  color={descriptionColor}
                  isTruncated>
                  {description}
                </Text>
              ) : null}
            </Box>
          </HStack>
          <Box>
            <Flex direction="column" alignItems="flex-end">
              {amount ? (
                <Text
                  variant="bodyBold-md"
                  maxFontMultiplier={MAX_FONT_MULTIPLIER}
                  color={formatAmountStyle(status, String(amount))}>
                  {amount}
                </Text>
              ) : null}
              {date ? (
                <Text
                  maxFontMultiplier={MAX_FONT_MULTIPLIER}
                  variant="body-sm"
                  color="text">
                  {date}
                </Text>
              ) : null}
              {rightIcon ? (
                <Icon name={rightIcon} color="info" size="16" />
              ) : null}
            </Flex>
          </Box>
        </Flex>
        {footerTitle ? (
          <Flex
            direction="row"
            justifyContent="space-between"
            p={1}
            borderRadius="xs"
            bg="primaryDark.10">
            <Text
              maxFontMultiplier={MAX_FONT_MULTIPLIER}
              variant="body-sm"
              color="text">
              {footerTitle}
            </Text>
            {footerDescription ? (
              <Text
                maxFontMultiplier={MAX_FONT_MULTIPLIER}
                variant="body-sm"
                color="text">
                {footerDescription}
              </Text>
            ) : null}
          </Flex>
        ) : null}
      </VStack>
    </Box>
  );
  if (onPress) {
    return <Pressable onPress={onPress}>{content}</Pressable>;
  }

  return content;
};
