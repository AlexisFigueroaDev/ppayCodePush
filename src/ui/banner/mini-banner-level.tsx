import React, { FC } from 'react';

import { HStack, Pressable } from 'native-base';

import { useTrackingContextFunction } from '@ui/context/TrackingContext';

import { MiniBannerLevelProps } from './types';
import { BadgeLevel } from '../badge';
import { Icon } from '../icon';
import { Text } from '../text';

const MiniBannerLevel: FC<MiniBannerLevelProps> = ({
  /** pressable function */
  onPress = () => {},
  /** Level code for level badge LTV */
  levelCode,
  /** Set Text for level badge LTV */
  text,
  /** Set component background color  */
  bgColor = 'primary.100',
  /** testID */
  testID,
}) => {
  const _onPress = useTrackingContextFunction(onPress, 'ev_cta', {
    element: 'Banner',
    click_text: text,
    test_id: testID,
  });

  return (
    <Pressable
      bgColor={bgColor}
      variant="mini-banner-level"
      onPress={_onPress}
      testID={testID}
    >
      <HStack space="2" alignItems="center">
        <BadgeLevel lvl={levelCode} size="extrasmall" />
        <HStack>
          <Text variant="body-sm" color="white">
            {text}
          </Text>
          <Text variant="bodyBold-sm" color="white">
            {` Nivel ${levelCode}!`}
          </Text>
        </HStack>
      </HStack>
      <Icon name="ChevronRight" size="16" color="white" />
    </Pressable>
  );
};

export default MiniBannerLevel;
