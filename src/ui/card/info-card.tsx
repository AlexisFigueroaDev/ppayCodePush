import React from 'react'

import {
  AspectRatio,
  Box,
  Center,
  Image,
  Pressable,
  VStack,
} from 'native-base';

import { InfoCardProps } from './types';
import withAnimatedScale from '../../hoc/withAnimatedScale';
import { BadgeLabel } from '../badge';
import { LogoPlaceholder } from '../logo-placeholder';
import { Text } from '../text';

const ASPECT_RATIO = 21 / 9;
const MAX_FONT_MULTIPLIER = 1.4;
const OPACITY_ON_DISABLED = '50';

const InfoCard: React.FC<InfoCardProps> = ({
  /** string for the title */
  title,
  /** string for the title */
  label,
  /** url for the aspect ratio image */
  imageUri,
  /** url for the logo image */
  logoUri,
  /** aspect ratio image bg color */
  imageBgColor = 'primary.100',
  /** string for the highlightText */
  highlightText,
  /** string for the legend */
  legend,
  /** string for the description */
  description,
  /** number of lines for the tile to apply ellipsis */
  noOfLinesTitle,
  /** number of lines for the description to apply ellipsis */
  noOfLinesDescription,
  /** number of lines for the highlightText to apply ellipsis */
  noOfLinesHighlightText,
  /** number of lines for the legend to apply ellipsis */
  noOfLinesLegend,
  /** custom width to apply on card container */
  width = '40',
  /** function to be fire once the component has been pressed */
  onPress,
  /** function to be fire once the buttons press start */
  onPressIn,
  /** function to be fire once the buttons press end */
  onPressOut,
  /** boolean to disable press events in the card and add opacity to the other elements */
  isDisabled,
}) => {
  const hasSomeText = title || highlightText || description;

  return (
    <Pressable
      disabled={isDisabled}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      flex={1}
    >
      <Box
        width={width}
        justifyContent="space-between"
        variant="info-card"
        flex={1}
        bg={isDisabled ? 'primaryDark.10' : 'primaryDark.0'}
      >
        <VStack space={2}>
          <Box>
            <AspectRatio
              w="full"
              opacity={isDisabled ? OPACITY_ON_DISABLED : 1} // TODO: remove this once the analysis of this component is done
              ratio={ASPECT_RATIO}
              bgColor={imageBgColor}
              rounded="xs"
            >
              <Image
                rounded="xs"
                source={{
                  uri: imageUri,
                }}
                fallbackElement={<Box />}
                alt="benefit"
              />
            </AspectRatio>
            {label ? (
              <Center position="absolute" bottom="0" right="0">
                <BadgeLabel variant={isDisabled ? 'disabled' : 'news'}>
                  {label}
                </BadgeLabel>
              </Center>
            ) : null}
            {logoUri ? (
              <Center
                position="absolute"
                top="0"
                left="2"
                bottom="0"
                opacity={isDisabled ? OPACITY_ON_DISABLED : 1} // TODO: remove this once the analysis of this component is done
              >
                <LogoPlaceholder uri={logoUri} alt="bonus-card-logo" />
              </Center>
            ) : null}
          </Box>

          {hasSomeText && (
            <VStack
              space={2}
              px="2"
              opacity={isDisabled ? OPACITY_ON_DISABLED : 1} // TODO: remove this once the analysis of this component is done
            >
              {title ? (
                <Text
                  maxFontMultiplier={MAX_FONT_MULTIPLIER}
                  noOfLines={noOfLinesTitle}
                  variant="bodyBold-sm"
                >
                  {title}
                </Text>
              ) : null}

              <VStack space="1">
                {highlightText ? (
                  <Text
                    maxFontMultiplier={MAX_FONT_MULTIPLIER}
                    noOfLines={noOfLinesHighlightText}
                    color="primary"
                    variant="bodyBold-sm"
                  >
                    {highlightText}
                  </Text>
                ) : null}

                {description ? (
                  <Text
                    maxFontMultiplier={MAX_FONT_MULTIPLIER}
                    noOfLines={noOfLinesDescription}
                    variant="body-xs"
                  >
                    {description}
                  </Text>
                ) : null}
              </VStack>
            </VStack>
          )}
        </VStack>

        {hasSomeText && legend ? <Box mt="4" /> : null}
        {legend ? (
          <Box
            px="2"
            opacity={isDisabled ? OPACITY_ON_DISABLED : 1} // TODO: remove this once the analysis of this component is done
          >
            <Text
              maxFontMultiplier={MAX_FONT_MULTIPLIER}
              noOfLines={noOfLinesLegend}
              variant="body-xs"
            >
              {legend}
            </Text>
          </Box>
        ) : null}
      </Box>
    </Pressable>
  );
};

export default withAnimatedScale(InfoCard)
