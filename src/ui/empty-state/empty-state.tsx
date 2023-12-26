import React, { FC } from 'react';

import { VStack } from 'native-base';

import {
  EMPTY_STATE_SIZES,
  EmptyStateProps,
  descriptionVariantSizeBy,
  illustrationSizeBy,
} from './types';
import { SolidButton } from '../button';
import { Illustration } from '../illustrations';
import { Text } from '../text';

export const EmptyState: FC<EmptyStateProps> = ({
  /** string for the description */
  description,
  /** function to be fire once the button has been pressed */
  onPressButton,
  /** string for the name of illustration */
  illustration,
  /** string for the button text */
  buttonText,
  /** string for the title text */
  titleText,
  /** default variant for the empty state */
  size = EMPTY_STATE_SIZES.SM,
}) => (
  <VStack space={3} alignItems="center">
    <Illustration name={illustration} size={illustrationSizeBy[size]} />

    <VStack space={2}>
      {titleText && size === EMPTY_STATE_SIZES.MD ? (
        <Text variant="bodyBold-lg" textAlign="center">
          {titleText}
        </Text>
      ) : null}
      <Text textAlign="center" variant={descriptionVariantSizeBy[size]}>
        {description}
      </Text>
      {buttonText &&
        onPressButton && ( // Las props de los buttons deberían extenderse de las props de ui/buttons, en un solo objeto para no tener que hacer la verificacion de ambas props
          <SolidButton
            testID="empty-state-button"
            variant="tertiary"
            size="sm"
            onPress={onPressButton}
          >
            {buttonText}
          </SolidButton>
        )}
    </VStack>
  </VStack>
);
