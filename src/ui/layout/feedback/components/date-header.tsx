import React, { FC } from 'react'

import { HStack, Text } from 'native-base'

import { Icon } from '@ui/icon'

interface Props {
  date: Date
}

export const DateHeader: FC<Props> = ({ date }: Props) => {
  const day = date.toLocaleDateString('en-US', { year: 'numeric' })
  const time = date.toLocaleTimeString('en-US', { timeStyle: 'short' })

  return (
    <HStack
      justifyContent="center"
      alignContent="center"
      space="3"
      marginTop="4"
      marginBottom="3"
    >
      <HStack space="2" justifyContent="center" alignContent="center">
        <Icon name="Calendar" size="20" />
        <Text variant="body-xs" alignSelf="center">
          {day.toString()}
        </Text>
      </HStack>
      <HStack space="2" justifyContent="center" alignContent="center">
        <Icon name="ClockFilled" size="20" />
        <Text variant="body-xs" alignSelf="center">
          {time.toString()}
        </Text>
      </HStack>
    </HStack>
  )
}
