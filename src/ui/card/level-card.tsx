/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';

import { Box, HStack, VStack, Pressable } from 'native-base';

import { LevelCardSkeleton } from './level-card-skeleton';
import { LevelCardProps, colorByLevel } from './types';
import { BadgeLevel } from '../badge';
import { Icon } from '../icon';
import { InCardRow } from '../row';
import { Text } from '../text';

const LevelCard: FC<LevelCardProps> = ({
  /** main title */
  title,
  /** featured content title */
  featuredTitle,
  /** featured rows content */
  featuredRows,
  /** title of the rows content */
  contentSectionTitle,
  /** right column title   */
  contentLimitTitle,
  /** Level code for level badge */
  levelCode,
  /** data to display on content section */
  rows,
  /** default row at the end of rows */
  defaultRow,
  /** on press footer button handler */
  onPressFooter,
  /** footer button label */
  footerButtonLabel,
  /** boolean to display skeleton */
  isLoading,
  /** props to be passed to skeleton */
  skeletonProps,
  /** boolean to display full width level card */
  isFullWidth = false,
  /** icon to display instead of level badge */
  icon,
}) => {
  if (isLoading) {
    return <LevelCardSkeleton {...skeletonProps} />;
  }

  return (
    <Box variant={isFullWidth ? 'level-card-full-width' : 'level-card'}>
      <VStack>
        <HStack
          paddingY={2}
          paddingX={3}
          alignItems="center"
          bgColor={colorByLevel[levelCode || 'b2b']}
        >
          <Box paddingRight={2}>
            {levelCode ? (
              <BadgeLevel lvl={levelCode} size="medium" />
            ) : icon ? (
              <Icon name={icon} size="40" />
            ) : null}
          </Box>
          <Box flex={1}>
            <Text variant="body-xs" noOfLines={2} color="textDarker">
              {title}
            </Text>
          </Box>
        </HStack>
        <VStack paddingY={2} paddingX={3} alignItems="flex-start" space={1}>
          {featuredRows?.length ? (
            <HStack flex={1} justifyContent="space-between" mb={4}>
              <VStack flex={1}>
                <Box mb={1}>
                  <Text variant="bodyBold-xs" color="textDarker">
                    {featuredTitle}
                  </Text>
                </Box>
                <Box>
                  {featuredRows.map((fRow) => (
                    <InCardRow key={fRow.title} {...fRow} />
                  ))}
                </Box>
              </VStack>
            </HStack>
          ) : null}
          <HStack flex={1} justifyContent="space-between">
            <Box flex={1}>
              <Text variant="bodyBold-xs" color="textDarker">
                {contentSectionTitle}
              </Text>
            </Box>
            {contentLimitTitle ? (
              <Box>
                <Text variant="bodyBold-xs" color="textDarker">
                  {contentLimitTitle}
                </Text>
              </Box>
            ) : null}
          </HStack>
          <VStack>
            {rows && rows.map((row) => <InCardRow key={row.title} {...row} />)}
            {defaultRow && (
              <HStack>
                <Box width={3} marginRight={2} />
                <InCardRow {...defaultRow} />
              </HStack>
            )}
          </VStack>
        </VStack>
        {onPressFooter && footerButtonLabel && (
          <Pressable onPress={onPressFooter}>
            <HStack
              paddingY={4}
              paddingX={3}
              alignItems="center"
              justifyContent="flex-start"
              borderTopColor="primaryDark.30"
              borderTopWidth={0.25}
            >
              <Box flex={1}>
                <Text variant="bodySemi-sm" color="primary">
                  {footerButtonLabel}
                </Text>
              </Box>
              <Icon name="ChevronRight" size="16" color="primary" />
            </HStack>
          </Pressable>
        )}
      </VStack>
    </Box>
  );
};

export default LevelCard;
