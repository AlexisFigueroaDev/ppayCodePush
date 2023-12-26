import React, { FC } from 'react';

import { Input, Pressable } from 'native-base';

import { Text } from '@theme/components/text';
import { fontConfig } from '@theme/foundations/font';
import { Icon } from '@ui/icon';

import { SearchInputProps } from './types';

export const SearchInput: FC<SearchInputProps> = ({
  value,
  onChangeText,
  isDisabled,
  placeholder,
}) => {
  const searchInputText = Text.variants['body-md'];

  return (
    <Input
      value={value}
      fontFamily={fontConfig.Jakarta[500].normal}
      onChangeText={onChangeText}
      variant="unstyled"
      _input={{
        ...searchInputText,
      }}
      isDisabled={isDisabled}
      borderColor="primaryDark.20"
      borderWidth={1}
      _focus={{
        bg: 'white',
        borderColor: 'primary.80',
        borderWidth: 2,
        borderStyle: 'solid',
      }}
      _disabled={{ bg: 'primaryDark.20', borderColor: 'primaryDark.50' }}
      placeholder={placeholder}
      InputRightElement={
        <Pressable
          onPress={() => !isDisabled && !!value && onChangeText('')}
          disabled={isDisabled}
          marginRight="3"
          paddingY="3"
        >
          <Icon
            name={value ? 'Close' : 'Search'}
            color={isDisabled ? 'text' : 'primary'}
          />
        </Pressable>
      }
    />
  );
};
