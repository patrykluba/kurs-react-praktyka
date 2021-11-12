import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { API_DEVICE } from '../../constants/api';

const validationSchema = Yup.object({
    name: Yup.string().required('Nazwa jest wymagana'),
    purchase_date: Yup.string().required('Data zakupu jest wymagana')
})

const NewDeviceForm = () => {
    const sendRequest = (data) => axios.post(API_DEVICE, data);

    const onSuccess = () => {
        formik.resetForm()
    };

    const onError = (err) => {
        console.log(err)
    }

    const mutation = useMutation(sendRequest, {
        onSuccess,
        onError
    })
    
    const formik = useFormik({
        initialValues: {
            name: '',
            purchase_date: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                mutation.mutateAsync(values);
            } catch (err) {
                console.log(err)
            }
        }
    })
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <InputLabel>Nazwa urządzenia</InputLabel>
                <Input value={formik.values.name} onChange={formik.handleChange} name="name" type="text" />
                <FormHelperText>{formik.errors.name}</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel>Data zakupu urządzenia</InputLabel>
                <Input value={formik.values.purchase_date} onChange={formik.handleChange} name="purchase_date" type="date" />
                <FormHelperText>{formik.errors.purchase_date}</FormHelperText>
            </FormControl>
            <Button type="submit">Dodaj</Button>
        </form>
    )
}

export default NewDeviceForm
