import React, { useContext } from 'react';
import { Appbar } from 'react-native-paper';
import { PreferencesContext } from '../../context/PreferencesContext';

const MainAppBar = ({ navigation, route, back }) => {
  const { toggleTheme } = useContext(PreferencesContext);

  const { name } = route?.params || {};

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={name ? name : 'Where in the world?'} />
      {!route.params && <Appbar.Action icon="theme-light-dark" onPress={() => toggleTheme()} />}
    </Appbar.Header>
  );
};

export default MainAppBar;
