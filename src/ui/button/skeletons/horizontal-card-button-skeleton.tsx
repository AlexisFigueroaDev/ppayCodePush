import React, { FC } from 'react';

import { Box, HStack, Skeleton, VStack } from 'native-base';

import { SkeletonButtonCardProps } from '../types';

export const SkeletonButtonCard: FC<SkeletonButtonCardProps> = () => {
  return (
    // TODO: Fix sizes of components by getting them into a container
    <Box
      flex="0.5"
      flexDirection="row"
      background="primaryDark.0"
      rounded="sm"
      overflow="hidden"
      borderColor="primaryDark.30"
      borderWidth={1}
      paddingX={3}
      paddingY={5}
    >
      <HStack width="full" space={2} justifyContent="space-between">
        <VStack space={2} width="50%">
          <Skeleton height="4" rounded="xs" />
          <Skeleton height="4" width="80%" rounded="xs" />
        </VStack>
        <Skeleton height="38" width="38" rounded="full" />
      </HStack>
    </Box>
  );
};
