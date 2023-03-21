import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Register from "../components/Register/Register";
import airplanelogo from "../assets/images/airplaneLogo.jpg";
import { useCreateAccountMutation } from "../services/account";

const Registration = () => {
  const [createAccount] = useCreateAccountMutation();

  const register = (values) => {
    console.log(values);
    createAccount({ ...values });
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
