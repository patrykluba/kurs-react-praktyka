import { ACTION_SET_LOGGED_USER, ACTION_SET_USER_DATA } from "../../constants/reduxKeys";

const state = {
  isLoggedUser: false,
  userData: null
};

export const authReducer = (initialState = state, { type, payload }) => {
  switch(type) {
    case ACTION_SET_LOGGED_USER: 
      return {
        ...initialState,
        isLoggedUser: payload
      }
    case ACTION_SET_USER_DATA: 
      return {
        ...initialState,
        userData: payload
      }
    default:
      return initialState;
  }
}