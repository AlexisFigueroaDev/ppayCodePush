import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from 'screens/Home/Home';
import Wallet from 'screens/Wallet/Wallet';

const TabBar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Billetera"
        component={Wallet}
        options={{
          tabBarLabel: 'Billetera',
          tabBarIcon: ({color, size}) => (
            <Icon name="wallet" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabBar;
