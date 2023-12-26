import React, { FC, useState } from 'react';

import { VStack } from 'native-base';

import { useGetProvinces } from '@screens/onBoarding/userAddress/hooks/use-get-provinces';
import { VariableWithSolidButton } from '@ui/button';
import { Illustration } from '@ui/illustrations';
import { Text } from '@ui/text';
import { useDebouncedValue } from '@utils/use-debounce-value';

import { BackdropSearch } from '../backdrop-select/backdrop-search';

type ProvincesBackdropSearchProps = {
  close: () => void;
  onChange: (value: { id: string; description: string }) => void;
};

const provincesBackdropText = {
  errorEmptyStateTitle: 'En este momento no podemos mostrar las provincias.',
  errorEmptyStateSubTitle: '¿Volvemos a intentarlo?',
  errorEmptyStateRetryButton: 'Reintentar',
  noResultsEmptyStateTitle:
    'No encontramos resultados que coincidan con tu búsqueda.',
};

type ProvincesBackdropSearchErrorEmptyStateProps = {
  retry: () => void;
};

const ProvincesBackdropSearchErrorEmptyState: FC<
  ProvincesBackdropSearchErrorEmptyStateProps
> = ({ retry }) => (
  <VStack alignItems="center" paddingTop={8} paddingX={1} space={2}>
    <Illustration name="PaperEmpty" />
    <Text variant="body-sm">{provincesBackdropText.errorEmptyStateTitle}</Text>
    <Text variant="body-sm">
      {provincesBackdropText.errorEmptyStateSubTitle}
    </Text>
    <VariableWithSolidButton
      onPress={retry}
      testID="provincesBackdropText.errorEmptyStateRetryButton"
      variant="tertiary"
    >
      {provincesBackdropText.errorEmptyStateRetryButton}
    </VariableWithSolidButton>
  </VStack>
);

const ProvincesBackdropSearchNoResultsEmptyState: FC = () => (
  <VStack alignItems="center" paddingTop={8} paddingX={1}>
    <Illustration name="PaperEmpty" />
    <Text variant="body-sm" textAlign="center">
      {provincesBackdropText.noResultsEmptyStateTitle}
    </Text>
  </VStack>
);

export const ProvincesBackdropSearch: FC<ProvincesBackdropSearchProps> = ({
  close,
  onChange,
}) => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebouncedValue(value, 400);
  const { data, error, isLoading, refetch, isRefetching } =
    useGetProvinces(debouncedValue);

  return (
    <BackdropSearch
      value={value}
      close={close}
      ErrorEmptyState={
        <ProvincesBackdropSearchErrorEmptyState retry={refetch} />
      }
      NoResultsEmptyState={<ProvincesBackdropSearchNoResultsEmptyState />}
      data={data || []}
      onChange={setValue}
      onRowPress={onChange}
      hasError={!!error}
      isLoading={isLoading || isRefetching}
    />
  );
};
