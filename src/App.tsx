import * as React from 'react';

import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RootNavigation from 'navigation/RootNavigation';

const App = () => {
  return <RootNavigation />;
};

export default App;
