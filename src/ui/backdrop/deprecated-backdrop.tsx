/**
 * A full-size, slide-up modal component for displaying content from the bottom of the screen.
 * Uses the `native-base` library for creating modals.
 *
 * @function BottomModal
 * @param {ActionSheetProps} props - The properties for the BottomModal component.
 * @returns {React.Element} - A rendered React element.
 *
 * @example
 * <BottomModal
 *   isOpen={modalVisible}
 *   onClose={handleModalClose}
 *   title="My Modal"
 * >
 *   <Text>Content goes here</Text>
 * </BottomModal>
 */
import React, { FC } from 'react';

import { Modal, Actionsheet, KeyboardAvoidingView } from 'native-base';

import { FullWidthSolidButton } from '@ui/button';

import { BackdropHeader } from './backdrop-header';
import { ActionSheetProps } from './types';

/** @deprecated USE backdrop instead */
export const DeprecatedBackdrop: FC<ActionSheetProps> = ({
  /* The content to be displayed within the modal. */
  children,
  /* Determines whether the modal is open or closed. */
  isOpen,
  /* Determines whether the modal is closed. */
  onClose,
  /* Optional title for the modal header. */
  title,
  /** */
  hasButtonGroup,
  /** Primary Action */
  primaryOnPress,
  /** Secondary Action */
  secondaryOnPress,
  /** buttonText */
  primaryButtonText,
  /** secondaryButtonText */
  secondaryButtonText,
  /** Overlay Opacity */
  overlayOpacity,
  /** Backdrop Height */
  height,
  /** Icon Name */
  iconName = 'Share',
}) => (
  <Actionsheet
    isOpen={isOpen}
    onClose={onClose}
    _backdrop={{
      backgroundColor: '#111524',
      opacity: overlayOpacity || '0.75',
    }}
    height={height}
  >
    <KeyboardAvoidingView behavior="padding" width="100%">
      <Modal.Content
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
        marginTop="auto"
        marginBottom={0}
      >
        <Modal.CloseButton />
        <BackdropHeader title={title} />
        <Modal.Body>{children}</Modal.Body>
        {hasButtonGroup ? (
          <Modal.Footer>
            {/* DISCLAIMER: Buttons will be replaced by buttons group component */}
            {primaryOnPress && primaryButtonText ? (
              <FullWidthSolidButton
                iconName={iconName}
                onPress={primaryOnPress}
                variant="primary"
                testID="backdrop-primary-solid-button"
              >
                {primaryButtonText}
              </FullWidthSolidButton>
            ) : null}
            {secondaryOnPress && secondaryButtonText ? (
              <FullWidthSolidButton
                iconName="Share"
                variant="tertiary"
                onPress={secondaryOnPress}
                testID="backdrop-secondary-solid-button"
              >
                {secondaryButtonText}
              </FullWidthSolidButton>
            ) : null}
          </Modal.Footer>
        ) : null}
      </Modal.Content>
    </KeyboardAvoidingView>
  </Actionsheet>
);
