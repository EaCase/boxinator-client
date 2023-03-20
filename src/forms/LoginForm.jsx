import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import MuiFormWrapper from "../components/common/forms/MuiFormWrapper";
import MuiTextInput from "../components/common/forms/MuiTextInput";
import { Button, Grid } from "@mui/material";
 
 const LoginForm = () => {
  return (
    <>
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
          </>
      );
    };
 
 export default LoginForm;