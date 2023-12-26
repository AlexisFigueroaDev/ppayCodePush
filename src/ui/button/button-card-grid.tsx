import React, { FC, ReactElement } from 'react';
import { Dimensions } from 'react-native';

import { Box, FlatList } from 'native-base';

import { ButtonCardGridProps } from './types';

const { width } = Dimensions.get('window');
const relation = 0.025;

export const ButtonCardGrid: FC<ButtonCardGridProps> = ({
  /** number of columns per row */
  itemsPerRow = 4,
  /** array of data to be used in the FlatList */
  data,
  /** children component */
  children,
  /** method to extract the key for every element in the FlatList */
  keyExtractor,
}) => {
  const renderRowSeparator = (): ReactElement => <Box paddingY={1} />;

  return (
    <FlatList
      data={data}
      renderItem={(itemData) => (
        <Box
          marginRight={
            itemData.index % itemsPerRow === itemsPerRow - 1
              ? 0
              : width * relation
          }
        >
          {children(itemData.item)}
        </Box>
      )}
      ItemSeparatorComponent={renderRowSeparator}
      keyExtractor={keyExtractor}
      numColumns={itemsPerRow}
      contentContainerStyle={undefined}
      nestedScrollEnabled
    />
  );
};
