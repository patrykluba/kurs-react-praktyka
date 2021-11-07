import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

import './Header.scss';

const Header = () => {
    return (
        <AppBar position="sticky" xs={{ mb: 5 }}>
            <Toolbar className="header">
                <Typography variant="h6" component="div" sx={{ mr: 2, flexGrow: 1 }}>APP</Typography>
                <div className="login-box">
                <Typography variant="h6" component="div" sx={{ mr: 2 }}>Zaloguj się</Typography>
                <Typography variant="h6" component="div" sx={{ mr: 2 }}>Zarejestruj się</Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header
