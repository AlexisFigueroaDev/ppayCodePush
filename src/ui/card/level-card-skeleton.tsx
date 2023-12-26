import React, { FC } from 'react'

import { Box, HStack, Skeleton, VStack } from 'native-base'

import { LevelCardSkeletonProps } from './types'
import { BadgeLevelSkeleton } from '../badge/badge-level-skeleton'
import { InCardRowSkeleton } from '../row/skeleton/in-card-row-skeleton'

export const LevelCardSkeleton: FC<LevelCardSkeletonProps> = ({
  /** skeleton rows quantity */
  rowsLength = 5,
  /** if skeleton should have default row or not */
  isWithDefaultRow = true,
}) => {
  return (
    <Box variant="level-card">
      <HStack
        paddingY={2}
        paddingRight={3}
        alignItems="center"
        bgColor="primaryDark.30"
        space={2}
      >
        <Box marginLeft={2}>
          <BadgeLevelSkeleton size="medium" />
        </Box>
        <Skeleton.Text flex={1} lines={2} startColor="primaryDark.0" />
      </HStack>
      <VStack paddingY={2} paddingX={3} alignItems="flex-start" space={1}>
        <Skeleton.Text lines={1} _line={{ width: '30%' }} />
        <VStack>
          {Array.from({ length: rowsLength }, (_, i) => i).map(e => (
            <InCardRowSkeleton key={e} variant="withIcon" />
          ))}
          {isWithDefaultRow && <InCardRowSkeleton variant="onlyTitle" />}
        </VStack>
      </VStack>
      <HStack
        paddingY={4}
        paddingX={3}
        alignItems="center"
        justifyContent="flex-start"
        borderTopColor="primaryDark.30"
        borderTopWidth={0.25}
      >
        <Skeleton.Text flex={1} lines={1} _line={{ width: '50%' }} />
        <Skeleton rounded="full" height={3} width={3} />
      </HStack>
    </Box>
  )
}
