import { useState } from 'react'

type CbOnRetry = (isCompleted: boolean) => void

type UseErrorRetries = {
  retryNo: number
  isRetriesCompleted: boolean
  onRetry: (cb?: CbOnRetry) => void
}

type UseErrorRetriesProps = {
  maxRetries?: number
}

export const useErrorRetries = ({
  maxRetries = 3,
}: UseErrorRetriesProps = {}): UseErrorRetries => {
  const [retryNo, setRetry] = useState(0)
  const isMaxRetriesAchieved = retryNo >= maxRetries

  const handlerRetries = (cb?: CbOnRetry): void => {
    if (!isMaxRetriesAchieved) setRetry(prev => prev + 1)
    cb && cb(isMaxRetriesAchieved)
  }

  return {
    retryNo,
    isRetriesCompleted: isMaxRetriesAchieved,
    onRetry: handlerRetries,
  }
}
