import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Dashboard from './components/pages/Dashboard';
import Detail from './components/pages/Detail';

type StackList = {
  Dashboard: undefined;
  Detail: undefined;
};
const Stack = createStackNavigator<StackList>();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
