import React from 'react';
import {MainTab} from './app/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import ProgressBar from './app/component/ProgressBar';

const App = () => {
  return <NavigationContainer><ProgressBar/>{MainTab()}</NavigationContainer>;
};

export default App;
