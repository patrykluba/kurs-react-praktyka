import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';

import { setLoggedUser } from '../../store/actions/authActions';

const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoggedUser(true));
    }, [])
    
    return (
        <Layout>
            <div>
                Strona główna
            </div>
        </Layout>
    )
}

export default HomePage
