import React from "react";
import { Form } from "formik";
import { Link } from "react-router-dom";
import MuiFormWrapper from "../components/common/forms/MuiFormWrapper";
import MuiTextInput from "../components/common/forms/MuiTextInput";
import { Button, Divider, Grid, Typography } from "@mui/material";

const LoginForm = ({ loginError, openModal }) => {
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
            sx={{ mt: 4, mb: 4, height: 50 }}
          >
            Login
          </Button>

          <Grid
            container
            columns={15}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Divider style={{ width: "100%", marginBottom: 10 }}>
              You can also
            </Divider>
            <Grid item xs={6}>
              <Link to="/Register">
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, height: 60 }}
                >
                  Register
                </Button>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Typography align="center">OR</Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={openModal}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, height: 60 }}
              >
                Send a shipment
              </Button>
            </Grid>
          </Grid>
        </MuiFormWrapper>
      </Form>
    </>
  );
};

export default LoginForm;
