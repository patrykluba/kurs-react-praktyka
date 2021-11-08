import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useMutation } from 'react-query';

import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

import { JWT_ACCESS_TOKEN, JWT_REFRESH_TOKEN} from '../../constants/auth';
import { API_ABOUT_ME } from '../../constants/api';
import { QUERY_ABOUT_ME } from '../../constants/queryKeys';

import { setLoggedUser, setUserData } from '../../store/actions/authActions';

import useGetData from '../../queries/useGetData';

const validationSchema = Yup.object({
    username: Yup.string().required('Login jest wymagany'),
    password: Yup.string().required('Hasło jest wymagane')
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const sendLoginRequest = (data) => axios.post('auth/token/', data);
    const mutation = useMutation(sendLoginRequest);
    const { query } = useGetData({
        url: API_ABOUT_ME,
        dataKey: QUERY_ABOUT_ME,
        options: {
            enabled: false,
        }
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const result = await mutation.mutateAsync(values);

                localStorage.setItem(JWT_ACCESS_TOKEN, result.data.access);
                localStorage.setItem(JWT_REFRESH_TOKEN, result.data.access);

                dispatch(setLoggedUser(true));

                const { data } = await query.refetch();

                dispatch(setUserData(data.data))
            } catch(err) {
                console.log(err)
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <InputLabel>Login</InputLabel>
                <Input value={formik.values.username} onChange={formik.handleChange} name="username" />
                <FormHelperText>{formik.errors.username}</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel>Hasło</InputLabel>
                <Input value={formik.values.password} onChange={formik.handleChange} name="password" type="password" />
                <FormHelperText>{formik.errors.password}</FormHelperText>
            </FormControl>
            <Button type="submit">Zaloguj się</Button>
        </form>
    )
}

export default LoginForm
