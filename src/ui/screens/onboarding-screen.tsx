import React, { FC } from 'react';

import { Box, Flex } from 'native-base';

import { ButtonGroupContainer } from '@ui/footers';

import { OnboardingScreenProps } from './types';
import { IconButton } from '../button';
import { Illustration } from '../illustrations';
import { ContentWrapper, VStack } from '../layout';
import { SingleRow } from '../row';
import { Text } from '../text';

export const OnboardingScreen: FC<OnboardingScreenProps> = ({
  /** string for set illustrations variants */
  illustration = 'PepaUp',
  /** string for title */
  title,
  /** string for description */
  description,
  /** array of objects for set line texts */
  textRows,
  /** object to set label text and onPress for buttons || Los dos tienen que ser condicionales! */
  primaryButton,
  secondaryButton,
  checkbox,
  /** Boolean to disable or enable the primary button */
  isDisabledPrimaryButton,
  /** Boolean to disable or enable the primary button */
  isLoadingPrimaryButton,
  /** Function for the close button */
  onCloseBtn,
  /** Conditional for the checkbox */
  withButtonGroup,
  children,
}) => (
  <Flex flex={1} paddingTop={8}>
    <Flex alignItems="flex-end" paddingX={4}>
      {onCloseBtn && (
        <IconButton.Transparent
          testID="onboarding-screen-close-button"
          name="Close"
          onPress={onCloseBtn}
          size="xl"
        />
      )}
    </Flex>
    <Flex paddingTop={8}>
      <ContentWrapper variant="body" alignItems="center">
        <Box alignSelf="center" paddingBottom="6">
          <Illustration name={illustration} size="xl" />
        </Box>
        <Box paddingBottom="8">
          <VStack space={3}>
            <Text variant="bodyBold-lg" textAlign="center">
              {title}
            </Text>
            {description ? (
              <Text variant="body-md" textAlign="center">
                {description}
              </Text>
            ) : null}
          </VStack>
        </Box>

        <VStack space={3}>
          {textRows
            ? textRows
                .slice(0, 3)
                .map((row) => (
                  <SingleRow
                    key={row}
                    title={row}
                    icon="Success"
                    iconColor="primary"
                  />
                ))
            : null}
        </VStack>

        {children && <VStack>{children}</VStack>}
      </ContentWrapper>
    </Flex>
    <Flex justifyContent="flex-end" flexGrow={1}>
      {withButtonGroup ? (
        <ButtonGroupContainer
          primaryButton={
            primaryButton && {
              children: primaryButton?.label,
              variant: 'primary',
              isLoading: isLoadingPrimaryButton,
              isDisabled: isDisabledPrimaryButton,
              onPress: primaryButton.onClose,
              testID: 'onboarding-screen-primary-button',
            }
          }
          secondaryButton={
            secondaryButton && {
              children: secondaryButton.label,
              onPress: secondaryButton.onClose,
              testID: 'onboarding-screen-secondary-button',
            }
          }
          checkbox={
            checkbox && (checkbox.checkboxText || checkbox.childrenText)
              ? {
                  title: checkbox.checkboxText,
                  accessibilityLabel: checkbox.checkboxAccessibilityLabel,
                  defaultIsChecked: checkbox.isCheckboxChecked,
                  onChange: checkbox.onCheckboxChange,
                  value: checkbox.checkboxText || '',
                  isChecked: !!checkbox.isCheckboxChecked,
                  childrenText: checkbox.childrenText,
                  testID: 'onboarding-screen-checkbox',
                }
              : undefined
          }
        ></ButtonGroupContainer>
      ) : null}
    </Flex>
  </Flex>
);
