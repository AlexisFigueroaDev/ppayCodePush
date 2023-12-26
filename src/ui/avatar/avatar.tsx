import React, { FC } from 'react'

import { Avatar as NBAvatar } from 'native-base'

import { AvatarProps } from './types'

export const Avatar: FC<AvatarProps> = ({ variant = 'rounded', uri, name }) => {
  const radius = variant === 'square' ? '2' : 'full'

  return (
    <NBAvatar
      source={{ uri }}
      width={8}
      height={8}
      borderRadius={radius}
      _image={{ borderRadius: radius }}
    >
      {name ? name.charAt(0) : null}
    </NBAvatar>
  )
}
