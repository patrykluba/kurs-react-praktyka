import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { setLoggedUser } from '../../store/actions/authActions';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoggedUser(true));
    }, [])
    
    return (
        <div>
            Strona główna
        </div>
    )
}

export default HomePage
