import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, AddContact, DetailContact, EditContact, Splash} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}/>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContact}
        options={{title: 'Tambah Catatanku'}}

      />
      <Stack.Screen
        name="DetailContact"
        component={DetailContact}
        options={{title: 'Detail'}}

      />
      <Stack.Screen
        name="EditContact"
        component={EditContact}
        options={{title: 'Edit Catatanku'}}
      />
    </Stack.Navigator>
  );
};

export default Router;
