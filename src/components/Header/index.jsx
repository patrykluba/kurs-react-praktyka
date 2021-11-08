import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN } from '../../constants/auth';
import { HOME_PAGE, LOGIN_PAGE } from '../../constants/urls';
import { setLoggedUser, setUserData } from '../../store/actions/authActions';

import authSelectors from '../../store/selectors/authSelectors';

import './Header.scss';

const Header = () => {
    const dispatch = useDispatch();
    const isLoggedUser = useSelector(authSelectors.getIsLoggedUser);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem(JWT_ACCESS_TOKEN, '');
        localStorage.setItem(JWT_REFRESH_TOKEN, '');
        dispatch(setLoggedUser(false));
        dispatch(setUserData(null));
        navigate(HOME_PAGE);
    }

    return (
        <AppBar position="sticky" className="appbar">
            <Toolbar className="header">
                <Typography variant="h6" component="div" sx={{ mr: 2, flexGrow: 1 }}>APP</Typography>
                <div className="login-box">
                {isLoggedUser ? 
                    <Typography variant="h6" component="div" sx={{ mr: 2 }} onClick={logout}>Wyloguj się</Typography>
                :
                <>
                    <Link to={LOGIN_PAGE}>
                        <Typography variant="h6" component="div" sx={{ mr: 2 }}>Zaloguj się</Typography>
                    </Link>
                </>}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
