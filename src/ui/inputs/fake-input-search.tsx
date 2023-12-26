import React, { FC } from 'react'

import { Box, Flex, Pressable } from 'native-base'

import { Icon } from '@ui/icon'
import { Text } from '@ui/text'

const FakeInputSearch: FC<{ placeholder: string; onPress: () => void }> = ({
  onPress,
  placeholder,
}) => (
  <Pressable onPress={onPress}>
    <Box
      w="full"
      py="3"
      px="4"
      bg="white"
      borderRadius="4"
      borderColor="primaryDark.20"
      borderWidth="1"
    >
      <Flex
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <Text variant="body-md" color="textLighter">
          {placeholder}
        </Text>
        <Icon name="Search" color="primary" />
      </Flex>
    </Box>
  </Pressable>
)

export default FakeInputSearch
