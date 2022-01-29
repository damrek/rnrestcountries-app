import React from 'react';
import { Provider } from 'react-redux';
import Main from './src/Main';
import { store } from './src/store';
import { LogBox } from 'react-native';
import { PreferencesProvider } from './src/context/PreferencesContext';

// TODO - change react-native-paper-dropdown
LogBox.ignoreLogs(['EventEmitter.removeListener']);

export default function App() {
  return (
    <Provider store={store}>
      <PreferencesProvider>
        <Main />
      </PreferencesProvider>
    </Provider>
  );
}
