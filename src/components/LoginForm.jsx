import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import * as yup from "yup";
import MuiFormWrapper from "./common/forms/MuiFormWrapper";
import MuiTextInput from "./common/forms/MuiTextInput";
import { Button, Grid } from "@mui/material";


const validationSchema = yup.object({
    username: yup
      .string('Enter your username')
      .email('Enter a valid username')
      .required('Username is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
 
 const LoginForm = () => {
  return (
    <>
     <Formik
       initialValues={{ username: '', password: '' }}
       schema={validationSchema}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}>
        <Form>
        <MuiFormWrapper headerText="User Login">
        <Grid container spacing={2}>
                      <MuiTextInput
                        name="username"
                        type="text"
                        label="Username"
                        />

                      <MuiTextInput
                        name="password"
                        type="password"
                        label="Password"
                        />
                        </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Login
                      </Button>

                      <Grid
                        container
                     direction="row"
                    justifyContent="space-evenly"
                     alignItems="center"
                        >
                      <Link to="/Register">Register instead</Link>
                      <Link to="/ForgotPasswordForm">Forgot Password</Link>
                      </Grid>
                      
              </MuiFormWrapper>
          </Form>
          </Formik>
          </>
      );
    };
 
 export default LoginForm;