import React from "react";
import LoginForm from "../forms/LoginForm";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import airplanelogo from "../assets/images/airplaneLogo.jpg";
import { useLoginMutation } from "../services/auth";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";

const validationSchema = yup.object({
  username: yup
    .string("Enter your email address")
    .required("Email address is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [login, { isError: loginError }] = useLoginMutation();

  const handleLogin = async (values) => {
    await login({ ...values })
      .unwrap()
      .then(() => navigate("/shipments"))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={6} xs={12}>
            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <LoginForm loginError={loginError} />
            </Formik>
          </Grid>

          <Grid item sm={6} xs={0} alignItems="center" justifyContent="center">
            <img src={airplanelogo} alt="logo" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
