import React, { FC } from 'react'

import { Progress as NBProgress } from 'native-base'

import {
  ProgressBarProps,
  ProgressBarBGColors,
  ProgressBarSizeRecord,
} from './types'

export const ProgressBar: FC<ProgressBarProps> = ({
  // sets percentaje of filled track
  value = 75,
  // sets bar size
  size = 'thin',
  // sets bar radius
  rounded = 100,
  // sets bar background color
  backgroundColor = 'bgTrack',
}) => (
  <NBProgress
    value={value}
    height={ProgressBarSizeRecord[size]}
    rounded={rounded}
    backgroundColor={ProgressBarBGColors[backgroundColor]}
    _filledTrack={{
      bg: 'primary.60',
      roundedLeft: 0,
    }}
  />
)
