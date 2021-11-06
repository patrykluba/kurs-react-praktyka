import { ACTION_SET_LOGGED_USER } from "../../constants/reduxKeys";

export const setLoggedUser = (isLogged) => ({
    type: ACTION_SET_LOGGED_USER,
    payload: isLogged
})