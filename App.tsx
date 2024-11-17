import React from 'react';
import MainStackNavigation from './src/Navigation/MainStackNavigation';
import {NativeBaseProvider} from 'native-base';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <MainStackNavigation />
    </NativeBaseProvider>
  );
};

export default App;
