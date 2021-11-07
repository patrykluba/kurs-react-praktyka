import { MenuItem, MenuList, Paper, Stack } from '@mui/material'
import React from 'react'

import './Menu.scss';

const Menu = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Paper className="menu">
                <MenuList>
                    <MenuItem>Strona główna</MenuItem>
                </MenuList>
            </Paper>
        </Stack>
    )
}

export default Menu
