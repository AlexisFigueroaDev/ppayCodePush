import React, { FC } from 'react';

import { Modal, Text } from 'native-base';

import { BackdropHeaderProps } from './types';

/** @deprecated USE backdrop instead */
export const BackdropHeader: FC<BackdropHeaderProps> = ({ title }) => {
  if (title) {
    return (
      <Modal.Header>
        <Text
          color="primaryDark.90"
          fontSize={14}
          fontWeight={700}
          lineHeight={20}
        >
          {title}
        </Text>
        <Modal.CloseButton />
      </Modal.Header>
    );
  }

  return <Modal.CloseButton />;
};
