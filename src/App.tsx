import * as React from 'react';
import {NativeBaseProvider} from 'native-base';
import RootNavigation from 'navigation/RootNavigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <RootNavigation />
    </NativeBaseProvider>
  );
};

export default App;
