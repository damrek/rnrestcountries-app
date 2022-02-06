import React, { useContext } from 'react';
import MainStackNavigation from './navigation/MainStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import PreferencesContext from './context/PreferencesContext';

const Main = () => {
  const { theme } = useContext(PreferencesContext);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <MainStackNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Main;
