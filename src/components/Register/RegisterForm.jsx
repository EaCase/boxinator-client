import { Button, Grid } from "@mui/material";
import { Form } from "formik";
import MuiFormWrapper from "../common/forms/MuiFormWrapper";
import MuiTextInput from "../common/forms/MuiTextInput";
import MuiSelectField from "../common/forms/MuiSelectField";

const RegisterForm = ({ countries, isClaiming }) => {
  return (
    <Form>
      <MuiFormWrapper
        headerText={
          isClaiming
            ? "Sign up view your shipment details"
            : "Register new account"
        }
      >
        <Grid container columnSpacing={2}>
          <MuiTextInput
            name="firstName"
            type="text"
            label="First Name"
            sm={6}
          />
          <MuiTextInput name="lastName" type="text" label="Last Name" sm={6} />
          <MuiTextInput name="password" type="password" label="Password" />
          <MuiTextInput
            name="passwordConfirmation"
            type="password"
            label="Repeat password"
          />
          <MuiTextInput name="email" type="email" label="Email address" />
          <MuiTextInput name="dateOfBirth" type="date" label="Date of birth" />
          <MuiSelectField
            sm={6}
            name="country"
            label="Country of residence"
            options={countries}
          />
          <MuiTextInput name="zipCode" type="text" label="Postal code" sm={6} />
          <MuiTextInput
            name="contactNumber"
            type="tel"
            label="Contact number"
          />
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </MuiFormWrapper>
    </Form>
  );
};

export default RegisterForm;
