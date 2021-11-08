import { MenuItem, MenuList, Paper, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { HOME_PAGE, PANEL_PAGE } from '../../constants/urls';

import './Menu.scss';

const Menu = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Paper className="menu">
                <MenuList>
                <MenuItem>
                    <Link to={HOME_PAGE}>Strona główna</Link>
                    </MenuItem>
                <MenuItem>
                    <Link to={PANEL_PAGE}>Panel</Link>
                </MenuItem>
                </MenuList>
            </Paper>
        </Stack>
    )
}

export default Menu
