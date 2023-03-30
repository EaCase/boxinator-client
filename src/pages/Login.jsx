import { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import icoon from "../assets/images/icoon.png";
import { useLoginMutation } from "../services/auth";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
import OrderModal from "../components/Shipment/OrderModal";
import GuestOrderForm from "../components/Shipment/GuestOrderForm";
import LoginForm from "../components/Account/LoginForm";

const validationSchema = yup.object({
  username: yup
    .string("Enter your email address")
    .required("Email address is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

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
        <OrderModal showModal={showModal} closeModal={closeModal}>
          <GuestOrderForm />
        </OrderModal>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={6} xs={12} style={{ marginTop: 90 }}>
            <Formik
              initialValues={{ username: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <LoginForm loginError={loginError} openModal={openModal} />
            </Formik>
          </Grid>

          <Grid item sm={6} xs={0} alignItems="center" justifyContent="center">
            <img
              src={icoon}
              width={500}
              height={450}
              style={{ marginLeft: 110, marginTop: 60 }}
              alt="logo"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
