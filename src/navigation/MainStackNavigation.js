import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CountryScreen from '../screens/CountryScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MainScreen from '../screens/MainScreen';
import MainAppBar from './appbar/MainAppBar';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerHome = () => (
  <Drawer.Navigator drawerContent={(props) => <FiltersScreen {...props} />}>
    <Drawer.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
  </Drawer.Navigator>
);

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      screenOptions={{
        header: (props) => <MainAppBar {...props} />,
      }}
    >
      <Stack.Screen name="Drawer" component={DrawerHome} />
      <Stack.Screen name="Country" component={CountryScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
