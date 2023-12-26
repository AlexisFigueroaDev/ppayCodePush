import React, { FC } from 'react'

import { Text as NBText } from 'native-base'

import { TextProps, TextColors, BODYBOLD_MD, FONT_MULTIPLIER } from './types'

export const Text: FC<TextProps> = ({
  /** Internal content componets */
  children,
  /** Type of text */
  variant = BODYBOLD_MD,
  /** Type of available colors */
  color = 'text',
  /** Used to truncate text at a specific number of lines */
  noOfLines,
  /** Type of alignment */
  textAlign = 'left',
  /** Used to truncate text at a specific number of lines */
  isTruncated = false,
  /** Used to set the max font size multiplier */
  maxFontMultiplier = FONT_MULTIPLIER.max,
}) => {
  return (
    <NBText
      noOfLines={noOfLines}
      textAlign={textAlign}
      variant={variant}
      color={TextColors[color]}
      isTruncated={isTruncated}
      maxFontSizeMultiplier={maxFontMultiplier}
    >
      {children}
    </NBText>
  )
}
