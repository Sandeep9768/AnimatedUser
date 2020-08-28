import { AsyncStorage } from 'react-native';
import {
  UPDATE_USER, ADD_USER, REMOVE_USER, LOAD_USER
} from '../constants/Redux';

export const userReducer = (state = [], action) => {
  let user = state;
  switch (action.type) {
    case ADD_USER:
      user = [...state, { ...action.payload }];
      break;
    case LOAD_USER:
      user = [...state, ...action.payload ];
    break;
    case UPDATE_USER:
      user = state.map((users) => {
        if (users.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
      break;
    case REMOVE_USER:
      user = state.filter((users) => users.id !== action.id);
      break;
    default:
      return state;
  }
  // AsyncStorage.setItem('user', JSON.stringify(user));
  return user;
}