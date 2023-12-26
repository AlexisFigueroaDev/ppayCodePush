import React, { ReactElement } from 'react'
import { StyleSheet } from 'react-native'

import { Box, Button, FlatList, Flex } from 'native-base'

import { ItemSeparator } from './item-separator'
import { CarouselProps } from './type'
import { VStack } from '../layout'
import { Text } from '../text'

export function Carousel<T>({
  /** string to set the carousel title */
  title,
  /** array of data to be used in the FlatList */
  data,
  /** children component */
  children,
  /** method to extract the key for every element in the FlatList */
  keyExtractor,
  /** number that defines the snap interval */
  snapToInterval,
  /** right button props inside header carousel component */
  rightButton,
}: CarouselProps<T>): ReactElement {
  return (
    <VStack space={3}>
      {title || rightButton ? (
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          px={4}
          minHeight={8}
        >
          {title ? <Text>{title}</Text> : <Box />}

          {rightButton ? (
            <Button
              disabled={rightButton?.isDisabled}
              onPress={rightButton?.onPress}
              variant={
                rightButton?.isDisabled ? 'tertiary-disabled' : 'tertiary'
              }
              size="sm"
            >
              {rightButton.text}
            </Button>
          ) : null}
        </Flex>
      ) : null}

      <FlatList
        showsHorizontalScrollIndicator={false}
        bounces={false}
        data={data}
        renderItem={itemData => children(itemData.item)}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={keyExtractor}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        snapToInterval={snapToInterval}
        decelerationRate={0}
      />
    </VStack>
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: { paddingHorizontal: 16 },
})
