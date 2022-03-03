import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { TextInput1, TextInput2, TextInput3 } from '../pages';
import MainApp from '../pages/MainApp';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName={'MainApp'}>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="TextInput1"
        component={TextInput1}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="TextInput2"
        component={TextInput2}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="TextInput3"
        component={TextInput3}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
