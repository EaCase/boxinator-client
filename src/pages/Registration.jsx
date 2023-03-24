import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Register from "../components/Register/Register";
import airplanelogo from "../assets/images/airplaneLogo.jpg";
import { useCreateAccountMutation } from "../services/auth";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Registration = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [token, setToken] = useState(null);
  const [createAccount] = useCreateAccountMutation();

  useEffect(() => {
    const claim = searchParams.get("token");

    if (claim) {
      setToken(claim);
      setSearchParams("");
    }
  }, []);

  const register = async (values) => {
    const body = { ...values, countryId: values.country.id, token: token };
    delete body.passwordConfirmation;
    delete body.country;

    await createAccount(body)
      .unwrap()
      .then(() => navigate("/login"))
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
            <Register handleRegister={register} isClaiming={Boolean(token)} />
          </Grid>
          <Grid item sm={6} xs={0} alignItems="center" justifyContent="center">
            <img src={airplanelogo} alt="logo" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Registration;
