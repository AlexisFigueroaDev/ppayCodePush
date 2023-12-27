import {colors} from '@theme/foundations/colors';
import {Box, StatusBar} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';

const HeaderPrepaid = () => {
  return (
    <>
      <Box paddingTop={0}>
        <StatusBar
          backgroundColor={colors.other[10]}
          barStyle={'dark-content'}
        />
      </Box>
    </>
  );
};
export default HeaderPrepaid;
