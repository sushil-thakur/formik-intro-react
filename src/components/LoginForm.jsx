import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Typography, TextField, Button } from '@material-ui/core';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email().required().trim().max(100).lowercase(),
        password: Yup.string().required().min(8).trim(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '300px',
              margin: 'auto',
              boxShadow: '0 0 10px 0 rgba(0,0,0,0.1)',
              padding: '20px',
            }}
          >
            <Typography variant='h4'>Login</Typography>
            <TextField
              fullWidth
              label='Email'
              {...formik.getFieldProps('email')}
            />
            <TextField
              fullWidth
              label='Password'
              {...formik.getFieldProps('password')}
            />
            <Button variant='contained' color='primary' type='submit'>
              Login
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;