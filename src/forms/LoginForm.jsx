import React from "react";
import { Form } from "formik";
import { Link } from "react-router-dom";
import MuiFormWrapper from "../components/common/forms/MuiFormWrapper";
import MuiTextInput from "../components/common/forms/MuiTextInput";
import { Button, Grid, Typography } from "@mui/material";

const LoginForm = ({ loginError }) => {
  return (
    <>
      <Form>
        <MuiFormWrapper headerText="User Login">
          <Grid container spacing={2}>
            <MuiTextInput name="username" type="text" label="Email address" />

            <MuiTextInput name="password" type="password" label="Password" />
          </Grid>

          {loginError && (
            <Typography mt={2} color="red">
              Login information is incorrect
            </Typography>
          )}

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
