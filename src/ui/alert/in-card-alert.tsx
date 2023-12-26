import React, { FC } from 'react';

import { Box } from 'native-base';

import {
  InCardAlertProps,
  inCardAlertIconBy,
  inCardAlertColorBy,
} from './types';
import { Icon } from '../icon';
import { HStack } from '../layout';
import { Text } from '../text';

export const InCardAlert: FC<InCardAlertProps> = ({
  /** Define status for feedback info | success | warning | error */
  status = 'info',
  /** Description for feedback */
  description,
  /** If is true show border to card */
  isContainer,
}) => (
  <Box
    padding={isContainer ? 2 : 0}
    borderRadius={0.5}
    borderColor={isContainer ? 'primaryDark.30' : 'transparent'}
    borderWidth={1}
    position="relative"
  >
    <HStack space={2}>
      <Icon
        name={inCardAlertIconBy[status]}
        size="16"
        color={inCardAlertColorBy[status]}
      />

      <Box flex={1}>
        <Text variant="body-xs" noOfLines={2}>
          {description}
        </Text>
      </Box>
    </HStack>
  </Box>
);
