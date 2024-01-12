import {NavigationContainer} from '@react-navigation/native';
import useCodePush from '@screens/CodePush/hook/UseCodePush';
import UpdateApp from '@screens/CodePush/UpdateApp';
import React, {useEffect, useState} from 'react';
import CodePush from 'react-native-code-push';
import AppStack from './AppStack/AppStack';
import TabBar from './Tab-bar/TabBar';
import codePush from 'react-native-code-push';
import Codepushscreen from '@screens/CodePush/Code-push-screen';

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
export default RootNavigation;
