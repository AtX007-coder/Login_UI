import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootStackNavigator from './navigation/RootStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
