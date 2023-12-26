import React, { FC } from 'react'

import { Box, Flex } from 'native-base'

import { InCardRowProps, ONLY_TITLE, WITH_ICON } from './type'
import { Icon } from '../icon'
import { Text } from '../text'

export const InCardRow: FC<InCardRowProps> = ({
  /** variant of row, with icon, without icon or only title */
  variant = typeof WITH_ICON,
  /* string main label */
  title = '',
  /* string short right description */
  description = '',
  /* boolean that indicates if show an x or tick */
  isDisabled = false,
}) => {
  const MAX_FONT_MULTIPLIER = 1.4

  return (
    <Flex variant={description ? 'in-card-row' : 'in-card-row-no-desc'}>
      {variant === WITH_ICON && (
        <Box flexGrow={0} flexShrink={1} flexBasis="auto">
          <Box width={3} height={3} marginRight={2}>
            <Icon
              name={isDisabled ? 'Close' : 'Tick'}
              color={isDisabled ? 'disabledError' : 'success'}
              size="12"
            />
          </Box>
        </Box>
      )}
      <Box flexGrow={1} flexShrink={0} flexBasis="100">
        <Text
          maxFontMultiplier={MAX_FONT_MULTIPLIER}
          variant="body-xs"
          color={isDisabled ? 'textDisabled' : 'textDarker'}
        >
          {title}
        </Text>
      </Box>
      {variant !== ONLY_TITLE && (
        <Box flexGrow={0} flexShrink={1} flexBasis="auto">
          <Text
            maxFontMultiplier={MAX_FONT_MULTIPLIER}
            variant="bodySemi-xs"
            color={isDisabled ? 'textDisabled' : 'textDarker'}
          >
            {description}
          </Text>
        </Box>
      )}
    </Flex>
  )
}
