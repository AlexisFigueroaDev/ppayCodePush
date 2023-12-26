import React, { FC } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { FlatList, Flex, HStack, Center, Box } from 'native-base';

import { ItemSeparator } from './item-separator';
import { InfoCardCarouselProps } from './type';
import { SolidButton } from '../button';
import { InfoCard, SkeletonInfoCard } from '../card';
import { EmptyState } from '../empty-state';
import { VStack } from '../layout';
import { Text } from '../text';

const { width } = Dimensions.get('window');
const ITEM_SIZE = width * 0.42;
const CONTENT_PADDING_X = 16;
const EMPTY_SIZE = width - CONTENT_PADDING_X * 2;
const SKELETON_COUNT = 3;

export const InfoCardCarousel: FC<InfoCardCarouselProps> = ({
  /** string to set the carousel title */
  title: carouselTitle,
  /** boolean value to define when component is loading data */
  isLoading,
  /** array of data to be used in the FlatList */
  data,
  /** boolean value to define when component has an error */
  isError = false,
  /** function to be fire once the empty state button has been pressed */
  onClickEmptyErrorButton = () => null,
  /** string to set the description of the empty state */
  descriptionEmptyError = '',
  /** string to set the description of the empty state */
  descriptionEmptyData = '',
  /** string to set the text of the empty error state button */
  buttonTextEmptyError = '',
  /** right button props that inside header carousel component */
  rightButton,
}) => (
  <VStack space={3}>
    {carouselTitle || rightButton ? (
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        px={4}
        minHeight={8}
      >
        {carouselTitle ? <Text>{carouselTitle}</Text> : <Box />}

        {rightButton ? (
          <SolidButton
            testID="info-card-carousel-right-button"
            isDisabled={rightButton?.isDisabled}
            onPress={rightButton.onPress}
            variant="tertiary"
            size="sm"
          >
            {rightButton.text}
          </SolidButton>
        ) : null}
      </Flex>
    ) : null}

    {isLoading ? (
      <HStack space={3} px={4}>
        {Array.from({ length: SKELETON_COUNT }, (_, i) => (
          <SkeletonInfoCard key={`skeleton-${i}`} width={ITEM_SIZE} />
        ))}
      </HStack>
    ) : (
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ title }, index) => `${title}${index}`}
        snapToInterval={ITEM_SIZE + 12}
        decelerationRate={0}
        bounces={false}
        renderItem={({
          item: {
            title,
            description,
            highlightText,
            legend,
            imageUri,
            logoUri,
            noOfLinesDescription,
            noOfLinesHighlightText,
            noOfLinesTitle,
            imageBgColor,
            label,
            noOfLinesLegend,
            onPress,
            isDisabled,
          },
        }) => (
          <InfoCard
            title={title}
            description={description}
            highlightText={highlightText}
            legend={legend}
            imageUri={imageUri}
            logoUri={logoUri}
            onPress={onPress}
            width={ITEM_SIZE}
            noOfLinesDescription={noOfLinesDescription}
            noOfLinesHighlightText={noOfLinesHighlightText}
            noOfLinesTitle={noOfLinesTitle}
            imageBgColor={imageBgColor}
            label={label}
            noOfLinesLegend={noOfLinesLegend}
            isDisabled={isDisabled}
          />
        )}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={ItemSeparator}
        ListEmptyComponent={
          <Center w={EMPTY_SIZE} py="3" minHeight="41">
            <EmptyState
              illustration={isError ? 'BadgeEmpty' : 'EmptyBag'}
              buttonText={isError ? buttonTextEmptyError : undefined}
              onPressButton={onClickEmptyErrorButton}
              description={
                isError ? descriptionEmptyError : descriptionEmptyData
              }
            />
          </Center>
        }
      />
    )}
  </VStack>
);

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: CONTENT_PADDING_X,
  },
});
