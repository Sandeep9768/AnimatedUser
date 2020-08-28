import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserList from '../Screen/UserList';
import UserDetail from '../Screen/UserDetail';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../store/actions';
import Service from '../Service/Service';
export default function MainNavigator() {

  const dispatch = useDispatch()
  useEffect(() => {
    Service.getApi()
      .then(json => {
        if (json.status === 200) {
          // console.log(json.data);
          dispatch(loadUser(json.data))
        }
        else {

        }
      }).catch((error) => {
      })

  }, [])
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
