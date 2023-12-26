import React, { FC } from 'react'

import { Box, Skeleton, VStack } from 'native-base'

export const ActivityRowSkeleton: FC = () => {
  return (
    <Box
      paddingX={3}
      paddingBottom={4}
      paddingTop={4}
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box alignItems="center" flexDirection="row">
        <Skeleton h="5" width="5" rounded="full"></Skeleton>

        <Box marginLeft={2}>
          <VStack space={2}>
            <Skeleton h="14px" width="16"></Skeleton>
            <Skeleton h="2.5" width="40"></Skeleton>
          </VStack>
        </Box>
      </Box>

      <VStack alignItems="flex-end" space={2}>
        <Skeleton h="14px" width="16"></Skeleton>
        <Skeleton h="2.5" width="20"></Skeleton>
      </VStack>
    </Box>
  )
}
