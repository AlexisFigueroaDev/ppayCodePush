import {NavigationContainer} from '@react-navigation/native';
import useCodePush from '@screens/CodePush/hook/UseCodePush';
import UpdateApp from '@screens/CodePush/UpdateApp';
import React, {useEffect, useState} from 'react';
import CodePush from 'react-native-code-push';
import AppStack from './AppStack/AppStack';
import TabBar from './Tab-bar/TabBar';
import codePush from 'react-native-code-push';

const RootNavigation: React.FC = () => {
  // const codePushUpdate = true;
  // const {progress, syncMessage} = useCodePush();
  const [updatePending, setUpdatePending] = useState(false);

  const checkUpdate = async () => {
    const update = await CodePush.checkForUpdate();
    return setUpdatePending(!!update);
  };

  useEffect(() => {
    checkUpdate();
  }, [updatePending]);

  return (
    <NavigationContainer>
      {updatePending ? <UpdateApp /> : <AppStack />}
    </NavigationContainer>
  );
};
export default RootNavigation;
