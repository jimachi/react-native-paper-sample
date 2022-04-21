import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Main } from './src/Main';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <PaperProvider>
      <Main />
    </PaperProvider>
    </NavigationContainer>
  );
}
