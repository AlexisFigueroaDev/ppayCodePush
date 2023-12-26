import React, { FC } from 'react';

import { Box, VStack } from 'native-base';

import { Text } from '@ui/text';
import { BODY_SM } from '@ui/text/types';

import { titleProps } from './types';

/**
 *
 * @deprecated Use two Text directly
 */
export const TitleDS: FC<titleProps> = ({
  /* title to show */
  title,
  /* SubTitle to show */
  SubTitle,
  /* Type of title */
  variant,
}) => {
  return (
    <Box variant={variant}>
      <VStack space={3}>
        <Text color="text">{title}</Text>
        {SubTitle && (
          <Text variant={BODY_SM} color="textLight" noOfLines={2}>
            {SubTitle}
          </Text>
        )}
      </VStack>
    </Box>
  );
};
