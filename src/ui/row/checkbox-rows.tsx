import React, { FC, useCallback, useMemo } from 'react';

import { Box, Pressable } from 'native-base';

import { Divider } from '@ui/divider';

import { SelectRowSkeleton } from './skeleton/select-row-skeleton';
import { CheckboxRowsProps } from './type';
import { Checkbox } from '../checkbox';

export const CheckboxRows: FC<CheckboxRowsProps> = ({
  rows = [],
  isLoading,
  amountOfLines,
}) => {
  const accesibilityLabel = useCallback(
    (row: CheckboxRowsProps['rows'][number]) =>
      row.accessibilityLabel ||
      `${row.title} ${row.subtitle ? `- ${row.subtitle}` : ''}`,
    [],
  );

  const memoizedRows = useMemo(() => {
    return rows.map((row) => (
      <Box key={row.title} w="full">
        {/* Negative padding because checkbox has paddingTop = 5 -_- */}
        <Pressable padding={4} paddingTop={-1} onPress={row.onPress}>
          <Checkbox
            title={row.title}
            subtitle={row.subtitle}
            value={row.value}
            isDisabled={row.isDisabled}
            isFocused={row.isFocused}
            accessibilityLabel={accesibilityLabel(row)}
            isChecked={row.isChecked}
            testID={`checkbox-row-${row.value}`}
            isTouchable={false}
            onChange={row.onPress}
          />
        </Pressable>
        {rows.length > 1 && <Divider />}
      </Box>
    ));
  }, [rows, accesibilityLabel]);

  return isLoading ? (
    <SelectRowSkeleton
      amountOfLines={amountOfLines || rows?.length}
      variant="checkbox"
      hasSubtitle={rows?.some(({ subtitle }) => !!subtitle)}
    />
  ) : (
    <Box w="full">{memoizedRows}</Box>
  );
};
