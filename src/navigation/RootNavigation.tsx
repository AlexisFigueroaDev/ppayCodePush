import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabBar from './Tab-bar/TabBar';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
};
export default RootNavigation;
