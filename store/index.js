import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './reducers';

const defaultStore = {
  user: []
};
const rootReducer = combineReducers({ user: userReducer });
export const store = createStore(
  rootReducer,
  composeWithDevTools()
);
