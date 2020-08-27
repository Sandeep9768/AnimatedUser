
// import React,{useEffect} from 'react';
// import {
//   SafeAreaView,Text, View
// } from 'react-native';
// import {userBlog} from './store/actions'
// import BlogList from './Screen/BlogList'
// import { connect } from 'react-redux';
//  const App=(props) => {
//   useEffect(() => {
//    getApi()
//   }, [])
//   const getApi=()=>{
//     props.getBlog()
//   }
//   return (
//     <View>
//     <Text>hellovdmnvdsn d</Text>
//     </View>
//   );
// };

// function mapStateToProps(state) {
// 	const blogRow  = state;
// 	return blogRow;
// }

// const actionCreators = {
// 	getBlog: userBlog.getBlog
// };
// export default connect(mapStateToProps,  actionCreators )(App);


import React from 'react'
import { YellowBox} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserList from './Screen/UserList';
import UserDetail from './Screen/UserDetail';
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
YellowBox.ignoreWarnings(["Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s, the componentWillUnmount method"]);
YellowBox.ignoreWarnings(["Remote debugger"]);
export default function App() {
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

