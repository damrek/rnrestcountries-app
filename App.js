import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import Main from './src/Main';
import { store } from './src/store';
import { LogBox } from 'react-native';
import { PreferencesContext } from './src/context/PreferencesContext';

// TODO - change react-native-paper-dropdown
LogBox.ignoreLogs(['EventEmitter.removeListener']);

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    text: 'black',
    accent: 'yellow',
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'black',
    text: 'white',
  },
};

export default function App() {
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? darkTheme : defaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <Main />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </PreferencesContext.Provider>
  );
}
