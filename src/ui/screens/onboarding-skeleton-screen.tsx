import React, { FC } from 'react'

import { Box, Flex } from 'native-base'

import { OnboardingSkeletonScreenProps } from './types'
import { IconButton } from '../button'
import { Illustration } from '../illustrations'
import { ContentWrapper, VStack } from '../layout'

export const OnboardingSkeletonScreen: FC<OnboardingSkeletonScreenProps> = ({
  /** string for set illustrations variants */
  illustration = 'PepaUp',
  /** function for close button */
  onCloseBtn = () => {},
  children,
}) => (
  <Flex flex={1}>
    <Flex alignItems="flex-end" paddingX={4} paddingTop={6}>
      <IconButton.Transparent
        testID="onboarding-screen-skeleton-close-button"
        name="Close"
        onPress={onCloseBtn}
        size="xl"
      />
    </Flex>
    <ContentWrapper variant="body" alignItems="center">
      <Box alignSelf="center" paddingBottom="6">
        <Illustration name={illustration} size="xl" />
      </Box>

      <VStack>{children}</VStack>
    </ContentWrapper>
  </Flex>
);
