import React, { FC } from 'react'

import { Icon } from 'native-base'

import {
  IllustrationsProps,
  IllustrationsPaths,
  illustrationSizeBy,
} from './types'

export const Illustration: FC<IllustrationsProps> = ({
  /** Illustration name */
  name,
  /** Illustration size defaults to MD */
  size = 'md',
}) => {
  const IllustrationComponent = IllustrationsPaths[name]

  if (!IllustrationComponent) {
    throw new Error(`Invalid illustration name: ${name}`)
  }

  return (
    <Icon
      as={
        <IllustrationComponent
          width={illustrationSizeBy[size]}
          height={illustrationSizeBy[size]}
        />
      }
    />
  )
}
