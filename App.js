import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import AppNavigator from './src/navigation/index';

// Main Application Entry Point
const App = () => {
  return (
    <>
      <AppNavigator />
    </>
  );
};

export default App;
