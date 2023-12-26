import React, { FC, useMemo } from 'react';

import { Box } from 'native-base';

import { Divider } from '@ui/divider';
import { HStack, VStack } from '@ui/layout';
import { ProgressBar } from '@ui/progress-bar';
import { StepperDots } from '@ui/stepper-dots';
import { Text } from '@ui/text';

import { StandardStepperProps } from './types';

export const StandardStepper: FC<StandardStepperProps> = ({
  steps,
  currentStepIdx,
  nextStepText,
  nextStepHelperText,
  amountOfInternalSteps,
  currentInternalStepIdx = 0,
}) => {
  // steps guard
  const currentStep =
    currentStepIdx < steps.length
      ? steps[currentStepIdx]
      : steps[steps.length - 1];

  const internalProgressBarValue = useMemo(() => {
    if (amountOfInternalSteps) {
      return ((currentInternalStepIdx + 1) / amountOfInternalSteps) * 100;
    } else {
      return 0;
    }
  }, [currentInternalStepIdx, amountOfInternalSteps]);

  return (
    <VStack space={2}>
      <Divider />
      <Box paddingX={4} paddingTop={2} paddingBottom={2}>
        <VStack space={2}>
          <Text variant="bodyBold-lg">{currentStep.title}</Text>
          <HStack space={2}>
            <Box display="flex" flexDirection="row" alignItems="center">
              <StepperDots
                totalSteps={steps.length}
                currentStep={currentStepIdx + 1}
              />
            </Box>
            <HStack space={0.5}>
              {nextStepHelperText && (
                <Text variant="body-sm">{nextStepHelperText}</Text>
              )}
              {nextStepText && (
                <Text variant="bodyBold-sm">{nextStepText}</Text>
              )}
            </HStack>
          </HStack>
        </VStack>
      </Box>
      {amountOfInternalSteps ? (
        <ProgressBar value={internalProgressBarValue} rounded={0} size="thin" />
      ) : (
        <Divider />
      )}
    </VStack>
  );
};
