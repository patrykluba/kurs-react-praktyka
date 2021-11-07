import React from 'react'

import { Grid, Paper } from '@mui/material';
import Menu from '../Menu';
import Header from '../Header';

const Layout = (props) => {
    return (
        <>
        <Header />
        <Grid container={true} spacing={2}>
            <Grid item xs={3}>
              <Menu />
            </Grid>

            <Grid item xs={9}>
              <Paper>
                {props.children}
              </Paper>
            </Grid>
        </Grid>
    </>
    )
}

export default Layout
