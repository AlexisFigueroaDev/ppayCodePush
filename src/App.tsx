import * as React from 'react';
import {NativeBaseProvider} from 'native-base';
import RootNavigation from 'navigation/RootNavigation';
import {customTheme} from 'theme';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <RootNavigation />
    </NativeBaseProvider>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: true,
})(App);
