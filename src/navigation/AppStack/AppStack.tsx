import TabBar from '@navigation/Tab-bar/TabBar';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PrepaidCardHome from '@screens/PrepaidCard/PrepaidCard-Home';
import {IconButtonAlpha} from '@ui/button/icon-button-alpha';
import {IconButtonTransparent} from '@ui/button/icon-button-transparent';

import React from 'react';
import {Button} from '../../theme/components/button';

export const ButtonBack: React.FC = () => {
  const navigation = useNavigation();

  const backActionHandler = (): void => {
    navigation.goBack();
  };

  return (
    <IconButtonTransparent
      name={'ArrowLeft'}
      size={'lg'}
      onPress={backActionHandler}
      testID={''}
    />
  );
};

const AppStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=" "
        component={TabBar}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="PrepaidCardRoute"
        component={PrepaidCardHome}
        options={{
          headerTitle: 'Mi Tarjeta',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#72EFD3',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 16,
          },
          headerLeft: () => <ButtonBack />,
        }}
      />
    </Stack.Navigator>
  );
};
export default AppStack;
