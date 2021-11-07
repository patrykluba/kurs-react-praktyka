import React from 'react'

import { Grid, Paper } from '@mui/material';
import Menu from '../../components/Menu';
import Header from '../../components/Header';

// eslint-disable-next-line react/display-name
const withLayout = (Component) => (props) => {
    return <>
        <Header />
        <Grid container={true} spacing={2}>
            <Grid item xs={3}>
              <Menu />
            </Grid>

            <Grid item xs={9}>
              <Paper>
                <Component {...props} />
              </Paper>
            </Grid>
        </Grid>
    </>
}

export default withLayout
