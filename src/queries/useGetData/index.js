import axios from "axios";
import { useQuery } from "react-query";

const useGetData = ({ url, dataKey, options}) => {
    
    const sendRequest = () => axios.get(url)
    const query = useQuery(dataKey, sendRequest, options)

    return {
        query
    }
}

export default useGetData;