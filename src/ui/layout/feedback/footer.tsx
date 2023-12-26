import React, { FC } from 'react'

import { ButtonGroupContainer } from '@ui/footers'

import { useFeedback } from './feedback'
import { ContentWrapper } from '../content-wrapper'

export const Footer: FC = () => {
  const { primaryAction, secondaryAction, description, checkbox } =
    useFeedback()

  return (
    <ContentWrapper variant="footer">
      <ButtonGroupContainer
        primaryButton={primaryAction}
        secondaryButton={secondaryAction}
        description={description}
        checkbox={checkbox}
      />
    </ContentWrapper>
  )
}
