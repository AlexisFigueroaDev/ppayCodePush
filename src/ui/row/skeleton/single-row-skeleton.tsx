import React, { FC } from 'react'

import { HStack, Skeleton } from 'native-base'

import { RowContainer } from '../row-container'
import { LARGE, SingleLineRowSkeletonProps } from '../type'

export const SingleLineRowSkeleton: FC<SingleLineRowSkeletonProps> = ({
  variant = LARGE,
  isBorder = false,
}) => {
  return (
    <RowContainer
      variant={`${variant}-single-row`}
      isBorder={isBorder}
      component={
        <HStack space={2} alignItems="center">
          <Skeleton
            bgColor="primaryDark.10"
            startColor="primaryDark.30"
            rounded="full"
            width={5}
            height={5}
          />
          <Skeleton
            bgColor="primaryDark.10"
            startColor="primaryDark.30"
            width={169}
            height={3}
            rounded={2}
          />
        </HStack>
      }
    ></RowContainer>
  )
}
