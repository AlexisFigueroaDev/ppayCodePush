import React, { FC } from 'react'

import { Box, Flex, Skeleton } from 'native-base'

import { InCardRowProps, ONLY_TITLE, WITH_ICON } from '../type'

export const InCardRowSkeleton: FC<Pick<InCardRowProps, 'variant'>> = ({
  /** variant of row, with icon, without icon or only title */
  variant,
}) => {
  return (
    <Flex variant="in-card-row">
      {variant === WITH_ICON && (
        <Box height={3} width={3} mr={2}>
          <Skeleton rounded="full" height={3} width={3} />
        </Box>
      )}
      <Skeleton.Text
        flexGrow={1}
        flexShrink={0}
        flexBasis="100"
        lines={1}
        _line={{
          width: variant === ONLY_TITLE ? '30%' : '60%',
        }}
      />
      <Box flexGrow={0} flexShrink={1} flexBasis="auto" height={3.5} width={4}>
        {variant !== ONLY_TITLE && <Skeleton height={3.5} width={4} />}
      </Box>
    </Flex>
  )
}
