import axios from "axios";
import { useQuery } from "react-query";

const useGetData = ({ url, dataKey, options, dataKeyOptions, additinoalOptions}) => {
    
    const sendRequest = () => axios.get(url)
    const query = useQuery(dataKey, sendRequest, options)

    const sendRequestOptions = () => axios.options(url);
    const queryOptions = useQuery(dataKeyOptions, sendRequestOptions, {
        enabled: false,
        ...additinoalOptions
    })

    return {
        query,
        queryOptions
    }
}

export default useGetData;