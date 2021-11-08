import { ACTION_SET_LOGGED_USER, ACTION_SET_USER_DATA } from "../../constants/reduxKeys";

export const setLoggedUser = (isLogged) => ({
    type: ACTION_SET_LOGGED_USER,
    payload: isLogged
})

export const setUserData = (data) => ({
    type: ACTION_SET_USER_DATA,
    payload: data
})