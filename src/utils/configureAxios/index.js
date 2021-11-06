import axios from "axios";

const configureAxios = () => {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
}

export default configureAxios;