/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

import { Box, VStack, ScrollView, HStack, Flex } from 'native-base'

import { LevelCardCarouselProps } from './type'
import { LEVEL_CARD_WIDTH } from '../../theme/components'
import { LevelCard, LevelCardSkeleton } from '../card'
import { Text } from '../text'

const SKELETON_COUNT = 3
const LEVEL_CARD_PADDING = 12
const CAROUSEL_SPACING = 6

export const LevelCardCarousel: FC<LevelCardCarouselProps> = ({
  title,
  data,
  isLoading,
  initialLevel,
}) => {
  const { width } = Dimensions.get('screen')
  const [offsetXY, setOffsetXY] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const CARD_WIDTH = LEVEL_CARD_WIDTH + LEVEL_CARD_PADDING

  useEffect(() => {
    if (data?.length && !isLoading) {
      const extraSpace = width - CARD_WIDTH
      const halfExtraSpace = extraSpace / 2
      const index = data.findIndex(d => d.levelCode === initialLevel)

      if (index === -1) return setOffsetXY({ x: 0, y: 0 })

      const isFirst = index === 0
      const isLast = index === data.length - 1

      if (isFirst) {
        return setOffsetXY({ x: 0, y: 0 })
      }

      if (isLast) {
        const xLastOffset =
          CARD_WIDTH * index + CAROUSEL_SPACING * 2 - extraSpace
        return setOffsetXY({
          x: xLastOffset,
          y: 0,
        })
      }

      const xValue = CARD_WIDTH * index + CAROUSEL_SPACING - halfExtraSpace

      return setOffsetXY({ x: xValue, y: 0 })
    }
  }, [data, width, initialLevel, isLoading, CARD_WIDTH])

  return (
    <Box width="full">
      <VStack space={3}>
        {title && (
          <Flex minH={8} width="full" px={4} align="center" flexDir="row">
            <Text variant="bodyBold-sm" color="textDarker">
              {title}
            </Text>
          </Flex>
        )}
        {isLoading ? (
          <HStack space={3} px={4}>
            {Array.from({ length: SKELETON_COUNT }, (_, i) => (
              <LevelCardSkeleton key={`skeleton-${i}`} />
            ))}
          </HStack>
        ) : (
          <ScrollView
            _contentContainerStyle={styles.contentContainerStyle}
            variant="level-card-carousel"
            contentOffset={offsetXY}
          >
            {data?.map((card, index) => {
              const isLast = index === data.length - 1
              return (
                <Box key={card.levelCode} marginRight={isLast ? 0 : 3}>
                  <LevelCard {...card} />
                </Box>
              )
            })}
          </ScrollView>
        )}
      </VStack>
    </Box>
  )
}

const styles = {
  contentContainerStyle: {
    px: 4,
  },
}
