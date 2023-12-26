import React, { FC } from 'react';

import { Box, VStack } from 'native-base';
import { TooltipProps } from 'rn-tourguide';

import { VariableWithSolidButton } from '@ui/button';
import { IconButtonTransparent } from '@ui/button/icon-button-transparent';
import { StepperDots } from '@ui/stepper-dots';
import { Text } from '@ui/text';

export const ContextualTooltip: FC<TooltipProps> = ({
  /** Indicates the first steps */
  isFirstStep,
  /** Indicates the last steps */
  isLastStep,
  /** Function to handle the next steps */
  handleNext,
  /** Function to handle the prev steps */
  handlePrev,
  /** Function to stop steps */
  handleStop,
  /** Prop receiving title, description and number of steps within the property text */
  currentStep,
  /** Indicates button name  */
  labels,
}) => {
  function transformText(string: string): {
    title: string;
    description: string;
  } {
    const cleanString = string.split('**');

    if (cleanString.length === 2) {
      const title = cleanString[0];
      const description = cleanString[1];

      return { title, description };
    } else {
      return {
        title: 'Título no encontrado',
        description: 'Descripción no encontrada',
      };
    }
  }
  const { title, description } = transformText(currentStep.text);

  return (
    <VStack
      backgroundColor="white"
      paddingX={3}
      borderRadius={4}
      width="100%"
      marginTop={-4}
    >
      <Box paddingY={3}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          paddingBottom={15}
        >
          <Text variant="bodyBold-md">{currentStep && title}</Text>
          <IconButtonTransparent
            name="Close"
            onPress={() => handleStop?.()}
            variant="ghost"
            testID=""
          />
        </Box>
        <Text variant="body-sm">{currentStep && description}</Text>
      </Box>
      <Box paddingBottom={3}>
        {isFirstStep ? (
          <Box
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
          >
            <Box width="9%" justifyContent="space-between" flexDirection="row">
              <StepperDots
                totalSteps={currentStep.tooltipBottomOffset}
                currentStep={currentStep && currentStep.order}
              />
            </Box>
            <VariableWithSolidButton onPress={() => handleNext?.()} testID="">
              {labels?.next || 'Siguiente'}
            </VariableWithSolidButton>
          </Box>
        ) : null}
        {isLastStep ? (
          <Box
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
          >
            <Box width="9%" justifyContent="space-between" flexDirection="row">
              <StepperDots
                totalSteps={currentStep.tooltipBottomOffset}
                currentStep={currentStep && currentStep.order}
              />
            </Box>
            <Box alignItems="center" flexDirection="row">
              <Box marginRight={3}>
                <VariableWithSolidButton
                  variant="tertiary"
                  onPress={() => handlePrev?.()}
                  testID=""
                >
                  {labels?.previous || 'Anterior'}
                </VariableWithSolidButton>
              </Box>
              <VariableWithSolidButton onPress={() => handleStop?.()} testID="">
                {labels?.finish || 'Finalizar'}
              </VariableWithSolidButton>
            </Box>
          </Box>
        ) : null}
        {!isLastStep && !isFirstStep ? (
          <Box
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="row"
          >
            <Box width="9%" justifyContent="space-between" flexDirection="row">
              <StepperDots
                totalSteps={currentStep.tooltipBottomOffset}
                currentStep={currentStep && currentStep.order}
              />
            </Box>
            <Box alignItems="center" flexDirection="row">
              <Box marginRight={3}>
                <VariableWithSolidButton
                  variant="tertiary"
                  onPress={() => handlePrev?.()}
                  testID=""
                >
                  {labels?.previous || 'Anterior'}
                </VariableWithSolidButton>
              </Box>
              <VariableWithSolidButton onPress={() => handleNext?.()} testID="">
                {labels?.next || 'Siguiente'}
              </VariableWithSolidButton>
            </Box>
          </Box>
        ) : null}
      </Box>
    </VStack>
  );
};
