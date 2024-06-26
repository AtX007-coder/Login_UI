import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../screens/home/HomeScreen';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Welcome from '../screens/welcome/Welcome';

const Stack = createStackNavigator();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
      }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        // screenOptions={{animation: 'none'}}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        // screenOptions={{animation: 'none'}}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        // screenOptions={{animation: 'none'}}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        // screenOptions={{animation: 'none'}}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
}
