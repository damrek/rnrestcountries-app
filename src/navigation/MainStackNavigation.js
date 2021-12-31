import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CountryScreen from '../screens/CountryScreen';
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
      <Stack.Screen name="Country" component={CountryScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
