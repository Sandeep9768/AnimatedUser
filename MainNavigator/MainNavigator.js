import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserList from '../Screen/UserList';
import UserDetail from '../Screen/UserDetail';

export default function MainNavigator() {
       
      
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='UserList'
      >
        <Stack.Screen name='UserList' component={UserList} />
        <Stack.Screen name='UserDetail' component={UserDetail} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
