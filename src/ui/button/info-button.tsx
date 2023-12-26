import React, { FC } from 'react';

import { Box, Center, Pressable, Skeleton, HStack, VStack } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { InfoButtonProps } from './types';
import { Avatar } from '../avatar';
import { BadgeLevel } from '../badge';
import { BadgeLevelSkeleton } from '../badge/badge-level-skeleton';
import { Icon } from '../icon';
import { Text } from '../text';

export const InfoButton: FC<InfoButtonProps> = ({
  /** Name to be displayed. */
  name,
  /** Text to be display info button description */
  text,
  /** URL for avatar image. */
  uri,
  /** Lvl for user badge level */
  lvl,
  /** Action function. */
  onPress,
  /** Title to be displayed */
  title,
  /** loading */
  isLoading,
  /** testID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Button',
    click_text: title || name || '',
    test_id: testID,
  });

  return (
    <Pressable variant="info-button" onPress={_onPress} testID={testID}>
      <HStack space={2}>
        {lvl ? (
          isLoading ? (
            <Center>
              <BadgeLevelSkeleton size="small" />
            </Center>
          ) : (
            <BadgeLevel lvl={lvl} size="small" />
          )
        ) : isLoading ? (
          <Skeleton startColor="primaryDark.0" opacity={0.5} w={8} h={8} />
        ) : (
          <Avatar variant="square" name={title || name || ''} uri={uri} />
        )}
        <Box justifyContent="center">
          {isLoading ? (
            <Box width="20">
              <VStack space={1}>
                <Skeleton startColor="primaryDark.0" opacity={0.5} h={3} />
                <Skeleton
                  startColor="primaryDark.0"
                  opacity={0.5}
                  h={2}
                  w={60}
                />
              </VStack>
            </Box>
          ) : (
            <Box>
              <Text maxFontMultiplier={1.4} variant="bodyBold-sm" color="white">
                {title || `Hola, ${name}`}
              </Text>
              <HStack space={0.5}>
                <Text maxFontMultiplier={1.4} variant="body-xs" color="white">
                  {text}
                </Text>
                <Box paddingY="3px">
                  <Icon color="white" name="ChevronRight" size="8" />
                </Box>
              </HStack>
            </Box>
          )}
        </Box>
      </HStack>
    </Pressable>
  );
};
