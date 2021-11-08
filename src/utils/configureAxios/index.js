import axios from "axios";
import { JWT_ACCESS_TOKEN } from '../../constants/auth';

const configureAxios = () => {
    const accessToken = localStorage.getItem(JWT_ACCESS_TOKEN);

    axios.defaults.baseURL = process.env.REACT_APP_API_URL;

    if(accessToken) axios.defaults.headers['Authorization'] = `JWT ${accessToken}`;
}

export default configureAxios;