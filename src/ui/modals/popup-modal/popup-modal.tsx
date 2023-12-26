import React, { FC } from 'react';

import { AspectRatio, Box, Image, Modal } from 'native-base';

import { FullWidthSolidButton } from '@ui/button';
import { Illustration, IllustrationKey } from '@ui/illustrations';
import { VStack } from '@ui/layout';
import { Text } from '@ui/text';

import { ModalCloseButton } from './components/modal-close-button';
import { PopupProps } from './types';

export const PopupModal: FC<PopupProps> = ({
  /* Title for the Pop Up */
  title,
  /* Descriptive text */
  description,
  /* Optional image URL to show */
  imageUri,
  /* Optional icon to show in case no image URL */
  icon,
  /* Title for the primary button */
  primaryButtonTitle,
  /* Action for the primary button */
  primaryButtonAction,
  /* Optional Title for the secondary button */
  secondaryButtonTitle,
  /* Optional Action for the secondary button */
  secondaryButtonAction,
  /* Boolean to show the Pop up */
  isOpen,
  /* Function to close the Pop Up */
  onClose,
}) => {
  const ilustrationImage: IllustrationKey = icon || 'BadgeReward';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      safeAreaTop
      _backdrop={{
        backgroundColor: '#111524',
        opacity: '0.75',
      }}
      paddingX={4}
      animationPreset="slide"
      _slide={{ duration: 800 }}
    >
      <Modal.Content maxHeight={560} width="full">
        <Modal.Body>
          <VStack space={8}>
            <Box>
              {imageUri ? (
                <AspectRatio
                  width="full"
                  ratio={21 / 9}
                  backgroundColor="primaryDark.30"
                  rounded="sm"
                >
                  <Image
                    rounded="sm"
                    source={{
                      uri: imageUri,
                    }}
                    fallbackElement={<Box />}
                    alt="pop-up-image"
                  />
                </AspectRatio>
              ) : (
                <Box alignItems="center" paddingTop={4}>
                  <Illustration name={ilustrationImage} size="lg" />
                </Box>
              )}
              {onClose ? (
                <ModalCloseButton onClose={onClose} imageUri={imageUri} />
              ) : null}
            </Box>

            <VStack space={4}>
              <Text variant="bodyBold-lg" textAlign="center">
                {title}
              </Text>
              <Text variant="body-md" textAlign="center">
                {description}
              </Text>
            </VStack>
            <VStack space={4}>
              {primaryButtonAction && primaryButtonTitle ? (
                <FullWidthSolidButton
                  testID="popup-modal-primary-button"
                  onPress={primaryButtonAction}
                >
                  {primaryButtonTitle}
                </FullWidthSolidButton>
              ) : null}

              {primaryButtonAction &&
              secondaryButtonAction &&
              secondaryButtonTitle ? (
                <FullWidthSolidButton
                  testID="popup-modal-secondary-button"
                  variant="tertiary"
                  onPress={secondaryButtonAction}
                >
                  {secondaryButtonTitle}
                </FullWidthSolidButton>
              ) : null}
            </VStack>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
