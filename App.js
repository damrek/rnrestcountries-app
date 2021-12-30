import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Main from './src/Main';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    text: 'black',
    accent: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Main />
      </NavigationContainer>
    </PaperProvider>
  );
}
