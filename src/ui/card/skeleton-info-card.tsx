import React from 'react'

import { AspectRatio, Box, Skeleton } from 'native-base'

import { SkeletonInfoCardProps } from './types'

const ASPECT_RATIO = 21 / 9

export const SkeletonInfoCard: React.FC<SkeletonInfoCardProps> = ({
  width = '40',
}) => {
  return (
    <Box w={width} variant="info-card" bg="primaryDark.0">
      <AspectRatio w="full" ratio={ASPECT_RATIO} rounded="xs">
        <Skeleton flex="1" h="full" w="full" />
      </AspectRatio>
      <Box px="2" pt="2">
        <Skeleton h="3.5" mb="3" w="2/3" rounded="xs" />
        <Skeleton w="full" h="2" mb="1" rounded="xs" />
        <Skeleton h="2" w="full" rounded="xs" mb="46px" />
        <Skeleton w="1/3" h="2" rounded="xs" />
      </Box>
    </Box>
  )
}
