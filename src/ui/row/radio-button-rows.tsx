import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Pressable, Radio, Box } from 'native-base';

import { Divider } from '@ui/divider';

import { SelectRowSkeleton } from './skeleton';
import { RadioButtonRowsProps } from './type';
import { RadioButton } from '../radio-button';

const MemoizedRadioButton = React.memo(RadioButton);
const MemoizedRadioGroup = React.memo(Radio.Group);

export const RadioButtonRows: FC<RadioButtonRowsProps> = ({
  rows,
  onChange: _onChange,
  isLoading,
  amountOfSkeletonLines,
}) => {
  const [value, setValue] = useState<string>('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current && rows.length > 0) {
      setValue(rows[0].value);
      isFirstRender.current = false;
    }
  }, [rows]);

  const accesibilityLabel = useCallback(
    (row: RadioButtonRowsProps['rows'][number]) =>
      row.accessibilityLabel ||
      `${row.title} ${row.subtitle ? `- ${row.subtitle}` : ''}`,
    [],
  );

  const onChange = useCallback(
    (v: string) => {
      setValue(v);
      _onChange(v);
    },
    [_onChange],
  );
  return isLoading || rows.length === 0 ? (
    <SelectRowSkeleton
      amountOfLines={amountOfSkeletonLines}
      variant="radio-button"
      hasSubtitle={rows?.some(({ subtitle }) => !!subtitle)}
    />
  ) : (
    <MemoizedRadioGroup
      name="SomeRadioButtonGroup"
      value={value}
      onChange={onChange}
      w="full"
    >
      {rows.map((row, idx) => (
        <Box key={`${row.value} + ${row.title}`} w="full">
          <Pressable p={4} onPress={() => onChange(row.value)} key={row.value}>
            <MemoizedRadioButton
              key={`${row.value}`}
              label={row.title}
              subtitle={row.subtitle}
              value={row.value}
              isDisabled={row.isDisabled}
              isFocused={row.isFocused}
              accessibilityLabel={accesibilityLabel(row)}
            />
          </Pressable>
          {rows.length > 1 && <Divider />}
        </Box>
      ))}
    </MemoizedRadioGroup>
  );
};
