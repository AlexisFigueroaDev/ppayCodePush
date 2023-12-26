/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';

import { VStack } from 'native-base';

import { ButtonGroupContainerProps } from './types';
import { FullWidthSolidButton } from '../button';
import { Checkbox } from '../checkbox/checkbox';
import { Text } from '../text/text';

export const ButtonGroupContainer: FC<ButtonGroupContainerProps> = ({
  description,
  primaryButton,
  secondaryButton,
  checkbox,
}) => (
  <VStack width="full" space="5" paddingBottom="8" paddingX="4">
    {description && <Text variant="bodyBold-md">{description}</Text>}
    {checkbox && (
      <Checkbox
        testID={checkbox.testID}
        isDisabled={checkbox.isDisabled}
        defaultIsChecked={checkbox.isChecked}
        title={checkbox.title}
        value={checkbox.value}
        onChange={checkbox.onChange}
        accessibilityLabel={checkbox.accessibilityLabel}
        isChecked={checkbox.isChecked}
        childrenText={checkbox.childrenText}
      />
    )}
    <VStack space="3">
      {primaryButton && (
        <FullWidthSolidButton {...primaryButton}>
          {primaryButton.children}
        </FullWidthSolidButton>
      )}
      {secondaryButton && (
        <FullWidthSolidButton {...secondaryButton} variant="tertiary">
          {secondaryButton.children}
        </FullWidthSolidButton>
      )}
    </VStack>
  </VStack>
);
