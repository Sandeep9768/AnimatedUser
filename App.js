
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
import { Provider } from 'react-redux'
import { store } from './store'
import MainNavigator from './MainNavigator/MainNavigator';
YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
YellowBox.ignoreWarnings(["Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.%s, the componentWillUnmount method"]);
YellowBox.ignoreWarnings(["Remote debugger"]);
export default function App() {
  return (
    <Provider store={store}>
    <MainNavigator></MainNavigator>
  </Provider>
  );
}

