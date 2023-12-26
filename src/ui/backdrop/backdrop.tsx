/* eslint-disable react/jsx-props-no-spreading */

import React, { FC } from 'react';

import {
  Actionsheet,
  Box,
  Flex,
  HStack,
  ScrollView,
  VStack,
} from 'native-base';

import { colors } from '@theme/foundations/colors';
import { IconButton } from '@ui/button';
import { Divider } from '@ui/divider';
import { ButtonGroupContainer } from '@ui/footers';
import { Text } from '@ui/text';

import { BackdropProps } from './types';

export const Backdrop: FC<BackdropProps> = ({
  /* The content to be displayed within the modal. */
  children,
  /* Determines whether the modal is open or closed. */
  isOpen,
  /* Determines whether the modal is closed. */
  onClose,
  /* Optional title for the modal header. */
  title,
  /* Button group container props */
  buttonGroup,
  /** Overlay Opacity */
  overlayOpacity,
  /* Makes the ui a fixed height */
  wrappedHeight,
  /* Makes the children's container scrollable  */
  withScroll = false,
}) => {
  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={() => onClose()}
      _backdrop={{
        backgroundColor: colors.primaryDark[100],
        opacity: overlayOpacity || '0.75',
      }}
      hideDragIndicator
    >
      <Actionsheet.Content borderTopRadius="sm" padding={0}>
        <Flex width="100%" h={wrappedHeight ? '100%' : undefined}>
          <HStack alignItems="center">
            {title && (
              <Box paddingX={4} paddingTop={4} paddingBottom={3}>
                <Text variant="bodyBold-md">{title}</Text>
              </Box>
            )}
            <Box marginLeft="auto" paddingTop={1} marginRight={2}>
              <IconButton.Transparent
                onPress={() => onClose()}
                // TODO:
                testID=""
                name="Close"
                size="xl"
              />
            </Box>
          </HStack>

          {title && <Divider />}

          <ScrollView
            scrollEnabled={withScroll}
            keyboardShouldPersistTaps="handled"
          >
            <Box paddingX={4} marginTop={4} flexGrow={1}>
              {children}
            </Box>
          </ScrollView>

          {buttonGroup && (
            <VStack space={5} paddingTop={!wrappedHeight ? 4 : undefined}>
              {wrappedHeight && <Divider />}
              <ButtonGroupContainer {...buttonGroup} />
            </VStack>
          )}
        </Flex>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
