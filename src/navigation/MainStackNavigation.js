import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from '../screens/MainScreen';
import MainAppBar from './appbar/MainAppBar';

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <MainAppBar {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
