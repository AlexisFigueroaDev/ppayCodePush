import {colors} from '@theme/foundations/colors';
import {Text} from '@ui/text';
import {Box, Flex, StatusBar} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
import useCodePush from './hook/UseCodePush';
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
            LOGS:
          </Text>
        </Box>
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
          <Text variant="bodyBold-lg" color="white">
            {`syncMessage: ${syncMessage}`}
          </Text>
        </Box>
        <Box marginY={2}>
          <Text variant="bodyBold-lg" color="white">
            {`progress: ${progress}`}
          </Text>
        </Box>
        <Box marginY={2}>
          <Text variant="bodyBold-lg" color="white">
            {`updateCheck: ${updateCheck}`}
          </Text>
        </Box>
        <Box marginY={2}>
          <Text variant="bodyBold-lg" color="white">
            {`catchError: ${catchError}`}
          </Text>
        </Box>
        <Box marginY={2}>
          <Text variant="bodyBold-lg" color="white">
            {`syncStatusPush: ${syncStatusPush}`}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};
export default UpdateApp;
