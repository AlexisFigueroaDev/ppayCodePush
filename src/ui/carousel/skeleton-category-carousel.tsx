import React, { FC } from 'react'

import { Flex, HStack, Skeleton, VStack } from 'native-base'

import { ContentWrapper } from '@ui/layout'

import { SkeletonCategoryCarouselProps } from './type'
import { Text } from '../text'

export const SkeletonCategoryCarousel: FC<SkeletonCategoryCarouselProps> = ({
  title,
}) => {
  const TOGGLE_HEIGHT = 30
  return (
    <VStack space={3}>
      {title ? (
        <Flex
          direction="row"
          align="center"
          justify="flex-start"
          px={4}
          minHeight={8}
        >
          <Text variant="bodyBold-md">{title}</Text>
        </Flex>
      ) : null}

      <ContentWrapper variant="body">
        <HStack space={3}>
          <Skeleton h={TOGGLE_HEIGHT} w={32} rounded="xs" />
          <Skeleton h={TOGGLE_HEIGHT} w={16} rounded="xs" />
          <Skeleton h={TOGGLE_HEIGHT} w={10} rounded="xs" />
          <Skeleton h={TOGGLE_HEIGHT} w={98} rounded="xs" />
          <Skeleton h={TOGGLE_HEIGHT} w={98} rounded="xs" />
        </HStack>
      </ContentWrapper>
    </VStack>
  )
}
