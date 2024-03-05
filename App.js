import 'react-native-gesture-handler';
import StackNavigator from './src/navigation/StackNavigator'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}