import React from 'react';
import { MainTab } from './app/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>{MainTab()}</NavigationContainer>
  );
};


export default App;
