import React from 'react';
import LoginForm from "../forms/LoginForm";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import airplanelogo from "../assets/images/airplaneLogo.jpg";


const Login = () => {
    return(
        <>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sm={6} xs={12}>
        <LoginForm/>
        </Grid>
          <Grid item sm={6} xs={0} alignItems="center" justifyContent="center">
            <img src={airplanelogo} alt="logo" />
          </Grid>
        </Grid>
      </Container>
    </>
    );
}

export default Login;