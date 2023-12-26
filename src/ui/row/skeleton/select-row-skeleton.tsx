import React, { FC, useCallback } from 'react';

import { Box, Flex, Skeleton } from 'native-base';
import { v4 } from 'uuid';

import { Divider } from '@ui/divider';

import { HStack, VStack } from '../../layout';
import { SelectRowsSkeletonProps } from '../type';

export const SelectRowSkeleton: FC<SelectRowsSkeletonProps> = ({
  /** variant of row with radiobutton or checkbox */
  variant = 'checkbox',
  /** if has subtitle render second line */
  hasSubtitle = false,
  /** number of component to render */
  amountOfLines = 1,
}) => {
  const renderSkeletonsLines = useCallback(() => {
    return Array(amountOfLines)
      .fill({})
      .map(() => (
        <Flex variant="selected-row" key={v4()}>
          <VStack>
            <Box pl={4} paddingY={5}>
              <HStack space={2}>
                <Flex justifyContent="center">
                  <Skeleton
                    width={6}
                    height={6}
                    rounded={variant === 'checkbox' ? 'none' : 'full'}
                  />
                </Flex>
                <VStack space={2}>
                  <Skeleton
                    height={3}
                    width="2/5"
                    marginTop={hasSubtitle ? 0 : 1}
                  />
                  {hasSubtitle && <Skeleton height={2.5} width="2/4" />}
                </VStack>
              </HStack>
            </Box>
            {amountOfLines > 1 && <Divider />}
          </VStack>
        </Flex>
      ));
  }, [amountOfLines, variant, hasSubtitle]);

  return <>{renderSkeletonsLines()}</>;
};
