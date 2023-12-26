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
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'

import { Modal, Actionsheet, KeyboardAvoidingView } from 'native-base'

import { ActionSheetProps } from './types'

export const BottomModal: FC<ActionSheetProps> = ({
  /* The content to be displayed within the modal. */
  children,
  /* Determines whether the modal is open or closed. */
  isOpen,
  /* Determines whether the modal is closed. */
  onClose,
  /* Optional title for the modal header. */
  title,
}) => (
  <Actionsheet isOpen={isOpen} onClose={onClose}>
    <KeyboardAvoidingView width="100%" behavior="padding">
      <Modal.Content style={styles.borders}>
        <Modal.CloseButton />
        {title ? <Modal.Header>{title}</Modal.Header> : null}
        {children}
      </Modal.Content>
    </KeyboardAvoidingView>
  </Actionsheet>
)

const styles = StyleSheet.create({
  borders: {
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    marginBottom: 0,
    marginTop: 'auto',
  },
})
