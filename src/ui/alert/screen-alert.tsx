import React, { FC } from 'react';
import { Pressable } from 'react-native';

import { Alert, Box, Flex } from 'native-base';

import {
  ScreenAlertProps,
  descriptionTextColorBy,
  screenAlertColorTextOrIconBy,
  screenAlertVariantBy,
} from './types';
import { SolidButton } from '../button';
import { Icon } from '../icon';
import { HStack, VStack } from '../layout';
import { Text } from '../text';

export const ScreenAlert: FC<ScreenAlertProps> = ({
  /** A short title for the error */
  title,
  /** a string with a short description, no more than two lines */
  description,
  /** string with availables types criticality */
  criticality,
  /** function to manage how to close the Alert */
  handleClose,
  /** string to defined the width of the component */
  width = 'full',
  /** text for the button */
  buttonText,
  /** function for the button */
  buttonOnClick,
  /** If criticality is "LOW" show cross or no show */
  showCross = true,
}) => (
  <Alert width={width} variant={screenAlertVariantBy[criticality]}>
    <VStack space={2}>
      <Box
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <Box flexDirection="row">
          <HStack space={2}>
            <Icon
              name="Alert"
              size="16"
              color={screenAlertColorTextOrIconBy[criticality]}
            />
            <Text
              variant="bodyBold-sm"
              color={screenAlertColorTextOrIconBy[criticality]}
            >
              {title}
            </Text>
          </HStack>
        </Box>

        {criticality === 'low' && showCross && (
          <Pressable onPress={handleClose}>
            <Box position="absolute" right="-8" bottom="0">
              <Icon name="Close" size="16" />
            </Box>
          </Pressable>
        )}
      </Box>

      <HStack space={3}>
        <Flex flex={1} justifyContent="center">
          <Text variant="body-sm" color={descriptionTextColorBy(criticality)}>
            {description}
          </Text>
        </Flex>

        {buttonText && buttonOnClick ? (
          <SolidButton
            testID="screen-alert-button"
            variant="tertiary"
            size="sm"
            onPress={buttonOnClick}
          >
            {buttonText}
          </SolidButton>
        ) : null}
      </HStack>
    </VStack>
  </Alert>
);
