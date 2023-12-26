import React, { createContext, FC, useContext, useMemo } from 'react'

import { VStack } from 'native-base'

import { FeedbackContextProps, FeedbackProps } from './types'

const FeedbackContext = createContext<FeedbackContextProps | undefined>(
  undefined,
)

export const useFeedback: () => FeedbackContextProps = () => {
  const context = useContext(FeedbackContext)
  if (context === undefined) {
    throw new Error('useFeedback must be used within a FeedbackContext')
  }
  return context
}

export const Feedback: FC<FeedbackProps> = ({
  body,
  checkbox,
  children,
  description,
  primaryAction,
  secondaryAction,
  variant,
}) => {
  const contextProps = useMemo(
    () => ({
      body,
      checkbox,
      description,
      primaryAction,
      secondaryAction,
      variant,
    }),
    [body, checkbox, description, primaryAction, secondaryAction, variant],
  );
  return (
    <FeedbackContext.Provider value={contextProps}>
      <VStack flex={1} justifyContent="space-between" bg="primaryDark.0">
        {children}
      </VStack>
    </FeedbackContext.Provider>
  );
};
