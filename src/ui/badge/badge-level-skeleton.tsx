import React, { FC } from 'react'

import { Icon } from 'native-base'

import { BadgeLvlImagePaths, SkeletonLevelProps } from './types'

export const BadgeLevelSkeleton: FC<SkeletonLevelProps> = ({
  size,
  color = 'primaryDark.0',
}) => {
  const BadgeLvlImage = BadgeLvlImagePaths.BadgeLvlSkeleton

  if (!BadgeLvlImage) {
    throw new Error(`Invalid lvl or size badge`)
  }

  return (
    <Icon
      opacity={0.5}
      as={
        <BadgeLvlImage
          width={size === 'small' ? 32 : 40}
          height={size === 'small' ? 32 : 44}
        />
      }
      color={color}
    />
  )
}
