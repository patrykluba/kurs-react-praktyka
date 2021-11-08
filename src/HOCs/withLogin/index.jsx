import React, { useEffect } from 'react';

import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { LOGIN_PAGE } from "../../constants/urls";
import authSelectors from "../../store/selectors/authSelectors";

// eslint-disable-next-line react/display-name
const withLogin = (Component) => (props) => {
    const navigate = useNavigate();
    const isLoggedUser = useSelector(authSelectors.getIsLoggedUser);

    useEffect(() => {
        if(!isLoggedUser) {
            navigate(LOGIN_PAGE);
        }
    }, [])

    return <Component {...props} />
}

export default withLogin;