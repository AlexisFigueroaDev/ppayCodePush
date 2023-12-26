import React, { FC } from 'react'

import { Icon } from 'native-base'

import { BadgeLvlImagePaths, LevelProps } from './types'

export const BadgeLevel: FC<LevelProps> = ({
  /** a number with the lvl from 1 to 3 */
  lvl,
  /** size avaible of the badgelevel */
  size,
}) => {
  const BadgeLvlImage = BadgeLvlImagePaths[`BadgeLvl${lvl}${size}`]

  if (!BadgeLvlImage) {
    throw new Error(`Invalid lvl or size badge`)
  }

  return (
    <Icon
      as={
        <BadgeLvlImage
          width={size === 'extrasmall' ? 20 : size === 'small' ? 32 : 40}
          height={size === 'extrasmall' ? 20 : size === 'small' ? 32 : 44}
        />
      }
    />
  )
}
