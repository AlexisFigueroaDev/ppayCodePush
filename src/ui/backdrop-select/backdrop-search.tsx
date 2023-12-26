import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { FlashList } from '@shopify/flash-list';
import { Box } from 'native-base';

import { Divider } from '@ui/divider';
import { VStack } from '@ui/layout';
import { SingleLineRowSkeleton, SingleRow } from '@ui/row';
import { SearchInput } from '@ui/search-input';
import { throttle } from '@utils/throttle';

const MemoizedSingleRow = React.memo(SingleRow);

type Item = { id: string; description: string };

type BackdropSearchProps = {
  value: string;
  data: Item[];
  isLoading?: boolean;
  ErrorEmptyState: React.ReactElement;
  NoResultsEmptyState: React.ReactElement;
  hasError?: boolean;
  isFetchingNextPage?: boolean;
  endReachedHandler?: () => void;
  close: () => void;
  onChange: (v: string) => void;
  onRowPress: (item: Item) => void;
};

export const BackdropSearch: FC<BackdropSearchProps> = ({
  close,
  data,
  value,
  onChange,
  onRowPress,
  isLoading,
  hasError,
  ErrorEmptyState,
  NoResultsEmptyState,
  endReachedHandler,
  isFetchingNextPage,
}) => {
  const separator = (): React.ReactElement => <Divider />;

  return (
    <VStack space={6}>
      <SearchInput value={value} onChangeText={onChange} />
      {isLoading ? (
        <>
          <SingleLineRowSkeleton />
          <SingleLineRowSkeleton />
          <SingleLineRowSkeleton />
          <SingleLineRowSkeleton />
          <SingleLineRowSkeleton />
        </>
      ) : hasError ? (
        ErrorEmptyState
      ) : !data || data?.length === 0 ? (
        NoResultsEmptyState
      ) : (
        <Box h="462px">
          <FlashList
            data={data}
            keyExtractor={(i) => i.id}
            renderItem={({ item: { id, description } }) => (
              <MemoizedSingleRow
                title={description}
                rightIcon="ChevronRight"
                onPress={() => {
                  onRowPress({ id, description });
                  close();
                }}
              />
            )}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              isFetchingNextPage ? <ActivityIndicator /> : undefined
            }
            onEndReached={
              !isLoading && !isFetchingNextPage && endReachedHandler
                ? throttle(endReachedHandler, 1000)
                : () => {}
            }
            ItemSeparatorComponent={separator}
            estimatedItemSize={46.2}
          />
        </Box>
      )}
    </VStack>
  );
};
