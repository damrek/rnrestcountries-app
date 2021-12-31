import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MainAppBar = ({ navigation, route, back }) => {
  const _toggleTheme = () => console.log('Toggle theme');

  const { name } = route?.params || {};

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={name ? name : 'Where in the world?'} />
      {!route.params && <Appbar.Action icon="theme-light-dark" onPress={_toggleTheme} />}
    </Appbar.Header>
  );
};

export default MainAppBar;
