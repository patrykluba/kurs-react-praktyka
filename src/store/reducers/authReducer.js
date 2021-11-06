import { ACTION_SET_LOGGED_USER } from "../../constants/reduxKeys";

const state = {
  isLoggedUser: false,
};

export const authReducer = (initialState = state, { type, payload }) => {
  switch(type) {
    case ACTION_SET_LOGGED_USER: 
      return {
        ...initialState,
        isLoggedUser: payload
      }
    default:
      return initialState;
  }
}