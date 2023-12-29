import {colors} from '@theme/foundations/colors';
import {Text} from '@ui/text';
import {Box, Flex, StatusBar} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
import useCodePush from './hook/UseCodePush';
import * as Progress from 'react-native-progress';
interface IUpdateApp {
  header?: string;
  subHeader?: string;
  progress?: string;
}

const UpdateApp: React.FC<IUpdateApp> = ({
  header = 'Downloading...',
  subHeader = 'Nueva actualizacion disponible',
}) => {
  const {progress, syncMessage, updateCheck, catchError, syncStatusPush} =
    useCodePush();

  const numberProgressBar = parseFloat(progress) / 100;
  return (
    <Flex backgroundColor={colors.secondaryFive['60']} flex={1}>
      <Box
        backgroundColor={colors.secondaryFive['60']}
        paddingTop={Platform.OS === 'ios' ? 12 : 0}>
        <StatusBar backgroundColor={colors.secondaryFive['60']} />
      </Box>

      <Box justifyContent="center" alignItems="center" flex={1}>
        <Box marginY={2}>
          <Text variant="bodyBold-lg" color="white">
            {header}
          </Text>
        </Box>
        <Box marginY={2}>
          <Text variant="bodyBold-lg" color="white">
            {syncMessage ? syncMessage : subHeader}
          </Text>
        </Box>
        <Box marginY={2}>
          <Text variant="bodyBold-lg" color="white">
            {progress}
          </Text>
        </Box>
        <Box marginY={2}>
          <Progress.Bar
            progress={numberProgressBar || 0}
            width={200}
            color={'#3eff3F'}
          />
        </Box>
      </Box>
    </Flex>
  );
};
export default UpdateApp;
