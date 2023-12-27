import {NavigationContainer} from '@react-navigation/native';
import useCodePush from '@screens/CodePush/hook/UseCodePush';
import UpdateApp from '@screens/CodePush/UpdateApp';
import React from 'react';
import CodePush from 'react-native-code-push';
import AppStack from './AppStack/AppStack';
import TabBar from './Tab-bar/TabBar';

const RootNavigation: React.FC = () => {
  // const codePushUpdate = true;
  // const {progress, syncMessage} = useCodePush();

  const checkUpdate = async () => {
    const update = await CodePush.checkForUpdate();
    return update;
  };

  const update = checkUpdate();

  return (
    <NavigationContainer>
      {update !== null || update !== undefined ? <UpdateApp /> : <AppStack />}
    </NavigationContainer>
  );
};
export default RootNavigation;
