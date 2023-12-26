import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppStack from './AppStack/AppStack';
import TabBar from './Tab-bar/TabBar';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};
export default RootNavigation;
