import {NavigationContainer} from '@react-navigation/native';
import useCodePush from '@screens/CodePush/hook/UseCodePush';
import UpdateApp from '@screens/CodePush/UpdateApp';
import React from 'react';
import AppStack from './AppStack/AppStack';
import TabBar from './Tab-bar/TabBar';

const RootNavigation = () => {
  const codePushUpdate = true;
  const {progress, syncMessage} = useCodePush(codePushUpdate);
  return (
    <NavigationContainer>
      {progress || syncMessage ? (
        <UpdateApp progress={progress} subHeader={syncMessage} />
      ) : (
        <AppStack />
      )}
    </NavigationContainer>
  );
};
export default RootNavigation;
