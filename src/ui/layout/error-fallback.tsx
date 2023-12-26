/**
 * @example
 *  We can use this component to show a fallback error when a query fails
 *  A component that displays an error message and a retry button.
 *  If the user clicks the retry button, it will execute the onRetry function.
 *  If the user clicks the retry button multiple times and the maxRetries is reached *  it will display the retryMessage and retryButtonText.
 *
 *  const {isError, refetch} = useGetQuery()
 *
 *  <FallbackError
 *   isError={isError} (Required)
 *   message={'Tuvimos un problema para mostrar este beneficio'} (Required)
 *   buttonText={'Reintentar'} (Optional)
 *   retryMessage={'Intentalo nuevamente en unos minutos.'} (Optional)
 *   retryButtonText={'Volver al inicio'} (Optional)
 *   onRetry={(isRetriesCompleted) => {
 *      if(isRetriesCompleted) someAction()
 *      else refetch()
 *    }} (Optional)
 *   height={'full'} (Optional)
 *  >
 *    <Component />
 *    Others components
 *  </FallbackError>
 */
import React, { FC } from 'react'

import { Center } from 'native-base'

import { EmptyState, useErrorRetries } from '@ui/empty-state'

import { ErrorFallbackProps } from './types'

export const ErrorFallback: FC<ErrorFallbackProps> = ({
  /** The child components to be rendered inside */
  children,
  /** The error state */
  isError,
  /** The initial message to be displayed */
  message,
  /** The initial button text to be displayed */
  buttonText,
  /** The final message to be displayed */
  retryMessage,
  /** The final button text to be displayed */
  retryButtonText,
  /** The function to be executed when the user press the retry button */
  onRetry,
  /** The height of the component */
  height = '5/6',
  /** The illustration to be displayed */
  illustration = 'Unplugged',
  /** The max number of retries */
  maxRetries = 3,
}) => {
  const { isRetriesCompleted, onRetry: onPressRetry } = useErrorRetries({
    maxRetries,
  })

  if (!isError) return <>{children}</>

  return (
    <Center height={height} px={4} width="full">
      <EmptyState
        illustration={illustration}
        description={isRetriesCompleted ? retryMessage || message : message}
        buttonText={isRetriesCompleted ? retryButtonText : buttonText}
        onPressButton={() => onPressRetry(onRetry)}
      />
    </Center>
  )
}
