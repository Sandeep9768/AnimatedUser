import {
  UPDATE_USER, ADD_USER, REMOVE_USER, LOAD_USER
} from '../constants/Redux';


export const loadUser = (payload = []) => ({
  type: LOAD_USER,
  payload: [...payload]
});
export const addUser = (payload) => ({
  type: ADD_USER,
  payload: { ...payload },
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload: { ...payload }
});

export const removeUser = (id) => ({
  type: REMOVE_USER,
  id
});
