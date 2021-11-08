import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { Grid, Paper } from '@mui/material';
import Menu from '../Menu';
import Header from '../Header';

import useGetData from '../../queries/useGetData';
import { API_ABOUT_ME } from '../../constants/api';
import { QUERY_ABOUT_ME } from '../../constants/queryKeys';

import './Layout.scss';
import { setLoggedUser, setUserData } from '../../store/actions/authActions';
import { useSelector } from 'react-redux';
import authSelectors from '../../store/selectors/authSelectors';

const Layout = (props) => {
  const dispatch = useDispatch();
  const isLoggedUser = useSelector(authSelectors.getIsLoggedUser);

  const { query } = useGetData({
    url: API_ABOUT_ME,
    dataKey: QUERY_ABOUT_ME,
    options: {
      enabled: false
    }
  });

  const checkIsUserLogged = async () => {
    if(isLoggedUser) return;

    try {
      const { data } = await query.refetch();
      if(data?.data) {
        dispatch(setLoggedUser(true));
        dispatch(setUserData(data.data));
      }
    } catch (err) {
      console.log(err);
    }
    
  }

  useEffect(checkIsUserLogged, [])

  return (
    <>
      <Header />
      <Grid container={true} spacing={2}>
          <Grid item xs={3}>
            <Menu />
          </Grid>

          <Grid item xs={9}>
            <Paper className="layout-paper">
              {props.children}
            </Paper>
          </Grid>
      </Grid>
    </>
  )
}

export default Layout
