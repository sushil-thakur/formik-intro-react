import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Typography, TextField, Button, FormControl, FormHelperText } from '@material-ui/core';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email("Must be a Valid Email").required("Email is Required").trim().max(100,"Email must be at max 100 charater").lowercase(),
        password: Yup.string().required("Password is required").min(8 ,"PAssword must be at least 8 ").trim(),
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
            <FormControl>
            <TextField
              fullWidth
              label='Email'
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>):null}
            </FormControl>

            <FormControl>
            <TextField
              fullWidth
              label='Password'
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>):null}
            </FormControl>
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