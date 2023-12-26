/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable global-require */

import React, { FC } from 'react'

import { Text } from 'native-base'

import { Container } from '@ui/layout'

import { DateHeader } from './components/date-header'
import { useFeedback } from './feedback'

export const BODY_VARIANTS = {
  none: require('./body-variants/none').default,
}

export const Body: FC = () => {
  const { body } = useFeedback()
  if (body) {
    const { variant, title, description, date } = body
    const BodyComponent = BODY_VARIANTS[variant]

    return (
      <Container
        topIosScrollViewBackgroundColor="white"
        bottomIosScrollViewBackgroundColor="white"
      >
        <Text variant="bodyBold-lg" textAlign="center">
          {title}
        </Text>
        {date && <DateHeader date={date} />}
        {description && (
          <Text
            variant="body-md"
            textAlign="center"
            marginTop={date ? '0' : '2'}
          >
            {description}
          </Text>
        )}
        <BodyComponent {...body} />
      </Container>
    )
  }
  return null
}
