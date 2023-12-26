import React, { FC } from 'react'

import { Box, Flex, Skeleton } from 'native-base'

import { HStack, VStack } from '../../layout'
import { DoubleLineRowSkeletonProps } from '../type'

export const DoubleLineRowSkeleton: FC<DoubleLineRowSkeletonProps> = ({
  paddingX,
}) => (
  <Flex py={4} px={paddingX} variant="double-line-row">
    <HStack space={2}>
      <Flex justifyContent="center">
        <Skeleton borderRadius="1" w={5} h={5} rounded="full" />
      </Flex>

      <VStack space={2}>
        <Skeleton borderRadius="1" h={3} w="2/5" />
        <Skeleton borderRadius="1" h={2.5} w="2/4" />
      </VStack>
    </HStack>

    <Box />
  </Flex>
)
