import React, { FC } from 'react'

import { Alert, Box } from 'native-base'

import {
  SingleLineAlertProps,
  singleLineColorTextOrIconBy,
  singleLineIconBy,
} from './types'
import { Icon } from '../icon'
import { HStack } from '../layout/h-stack'
import { Text } from '../text'

export const SingleLineAlert: FC<SingleLineAlertProps> = ({
  /** single line text description */
  description,
  /** it defines the type and the color of the text an icon */
  status,
}) => (
  <Alert padding="0" borderWidth="0" variant="outline">
    <Box width="full" flexDirection="row">
      <HStack space={1}>
        <Icon
          name={singleLineIconBy[status]}
          color={singleLineColorTextOrIconBy[status]}
          size="16"
        />

        <Text variant="body-sm" color={singleLineColorTextOrIconBy[status]}>
          {description}
        </Text>
      </HStack>
    </Box>
  </Alert>
)
