import React, { FC } from 'react'

import { Box, StatusBar } from 'native-base'

import { Icon, IconColors } from '@ui/icon'

import { FeedbackHeaderProps, ICONS } from './types'

export const FeedbackHeader: FC<FeedbackHeaderProps> = ({
  variant,
}: FeedbackHeaderProps) => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor={
        variant === 'info' ? IconColors.disabled : IconColors[variant]
      }
    />
    <Box
      alignItems="center"
      bg={variant === 'info' ? IconColors.disabled : IconColors[variant]}
      h="96px" // Todo: Realtivo!
      top={0}
      w="full"
      zIndex={0}
      mb="16"
    />
    <Box
      alignSelf="center"
      bg="primaryDark.0"
      borderRadius="full"
      position="absolute"
      top="48px"
    >
      <Icon name={ICONS[variant]} size="80" color={variant} />
    </Box>
  </>
)
