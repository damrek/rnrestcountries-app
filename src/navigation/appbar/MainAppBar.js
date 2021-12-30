import * as React from 'react';
import { Appbar } from 'react-native-paper';

const MainAppBar = ({ navigation, back }) => {
  const _toggleTheme = () => console.log('Toggle theme');

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Where in the world?" />
      <Appbar.Action icon="theme-light-dark" onPress={_toggleTheme} />
    </Appbar.Header>
  );
};

export default MainAppBar;
