import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Register from "../components/Register/Register";
import airplanelogo from "../assets/images/airplaneLogo.jpg";
import { useCreateAccountMutation } from "../services/auth";
import { useNavigate } from "react-router";

const Registration = () => {
  const navigate = useNavigate();
  const [createAccount] = useCreateAccountMutation();

  const register = async (values) => {
    const body = { ...values, countryId: values.country.id };
    delete body.passwordConfirmation;
    delete body.country;

    console.log(body);

    await createAccount({ ...body })
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
            <Register handleRegister={register} />
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
