import React, { useState } from 'react';
import { DarkTheme, DefaultTheme } from 'react-native-paper';

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

const PreferencesContext = React.createContext({});

export const PreferencesProvider = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  const toggleTheme = () => setIsThemeDark(!isThemeDark);

  return (
    <PreferencesContext.Provider
      value={{
        toggleTheme,
        isThemeDark,
        theme: isThemeDark ? darkTheme : defaultTheme,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesContext;
