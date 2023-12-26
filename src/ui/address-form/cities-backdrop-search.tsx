import React, { FC, useState } from 'react';

import { VStack } from 'native-base';

import { useGetCities } from '@screens/onBoarding/userAddress/hooks/use-cities';
import { VariableWithSolidButton } from '@ui/button';
import { Illustration } from '@ui/illustrations';
import { Text } from '@ui/text';
import { useDebouncedValue } from '@utils/use-debounce-value';

import { BackdropSearch } from '../backdrop-select/backdrop-search';

const citiesBackdropText = {
  errorEmptyStateTitle: 'En este momento no podemos mostrar las ciudades.',
  errorEmptyStateSubTitle: '¿Volvemos a intentarlo?',
  errorEmptyStateRetryButton: 'Reintentar',
  noResultsEmptyStateTitle:
    'No encontramos resultados que coincidan con tu búsqueda.',
};

type CitiesBackdropSearchErrorEmptyStateProps = {
  retry: () => void;
};

type CitiesBackdropSearchProps = {
  close: () => void;
  onChange: (value: { id: string; description: string }) => void;
  provinceId: string;
};

const CitiesBackdropSearchErrorEmptyState: FC<
  CitiesBackdropSearchErrorEmptyStateProps
> = ({ retry }) => (
  <VStack alignItems="center" paddingTop={8} paddingX={1} space={2}>
    <Illustration name="PaperEmpty" />
    <Text variant="body-sm">{citiesBackdropText.errorEmptyStateTitle}</Text>
    <Text variant="body-sm">{citiesBackdropText.errorEmptyStateSubTitle}</Text>
    <VariableWithSolidButton
      onPress={retry}
      testID="citiesBackdropText.errorEmptyStateRetryButton"
      variant="tertiary"
    >
      {citiesBackdropText.errorEmptyStateRetryButton}
    </VariableWithSolidButton>
  </VStack>
);

const CitiesBackdropSearchNoResultsEmptyState: FC = () => (
  <VStack alignItems="center" paddingTop={8} paddingX={1}>
    <Illustration name="PaperEmpty" />
    <Text variant="body-sm" textAlign="center">
      {citiesBackdropText.noResultsEmptyStateTitle}
    </Text>
  </VStack>
);

export const CitiesBackdropSearch: FC<CitiesBackdropSearchProps> = ({
  close,
  onChange,
  provinceId,
}) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebouncedValue(value, 400);
  const {
    data,
    error,
    isLoading,
    isRefetching,
    refetch,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetCities({
    description: debouncedValue,
    provinceId,
  });

  const flattenedCities = data?.pages.flatMap((page) => page.data);

  return (
    <BackdropSearch
      value={value}
      close={close}
      ErrorEmptyState={
        <CitiesBackdropSearchErrorEmptyState
          retry={() => {
            refetch();
          }}
        />
      }
      NoResultsEmptyState={<CitiesBackdropSearchNoResultsEmptyState />}
      data={flattenedCities || []}
      onChange={setValue}
      onRowPress={(v) => {
        onChange({ id: v.id, description: v.description });
      }}
      hasError={!!error}
      isLoading={isLoading || isRefetching}
      isFetchingNextPage={isFetchingNextPage}
      endReachedHandler={() => {
        fetchNextPage({}).catch(console.log);
      }}
    />
  );
};
