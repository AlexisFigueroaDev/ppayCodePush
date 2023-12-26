import React, { FC } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { Box } from 'native-base';

import { ScreenWrapper } from './screen-wrapper';
import { backgroundColorScrollView, ContainerProps } from './types';

const wrapperStyles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export const Container: FC<ContainerProps> = ({
  /** Internal content componets */
  children,
  /** Determines when the keyboard should stay visible after a tap */
  keyboardShouldPersistTaps = 'handled',
  /** Test id for test */
  testID,
  /** Content refresh while pull the screen */
  refreshControl,
  /** Set scrollView top background color */
  topIosScrollViewBackgroundColor = 'backgroundDefault',
  /** Set scrollView bottom background color */
  bottomIosScrollViewBackgroundColor = 'backgroundDefault',
}) => (
  <Box
    flexGrow={1}
    backgroundColor={
      backgroundColorScrollView[bottomIosScrollViewBackgroundColor]
    }
    position="relative"
  >
    <Box
      position="absolute"
      backgroundColor={
        backgroundColorScrollView[topIosScrollViewBackgroundColor]
      }
      height="1/2"
      top={0}
      right={0}
      left={0}
    />
    <ScreenWrapper>
      <ScrollView
        contentContainerStyle={wrapperStyles.contentContainerStyle}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        testID={testID}
        scrollEventThrottle={16}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshControl={refreshControl}
      >
        {children}
      </ScrollView>
    </ScreenWrapper>
  </Box>
);
