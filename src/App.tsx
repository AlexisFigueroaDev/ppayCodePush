import * as React from 'react';
import {NativeBaseProvider} from 'native-base';
import RootNavigation from 'navigation/RootNavigation';
import {customTheme} from 'theme';

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme}>
      <RootNavigation />
    </NativeBaseProvider>
  );
};

export default App;
