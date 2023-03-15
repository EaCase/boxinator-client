import { Grid } from "@mui/material";
import { Form, useFormik } from "formik";
import MuiFormWrapper from "../components/common/forms/MuiFormWrapper";
import MuiTextInput from "../components/common/forms/MuiTextInput";

const EditAccountForm = () => {
  return (
    <>
      <Form>
        <MuiFormWrapper headerText="Your Account">
          <Grid container spacing={2}>
            <MuiTextInput
              name="firstName"
              type="text"
              label="First Name"
              sm={6}
            />
            <MuiTextInput
              name="lastName"
              type="text"
              label="Last Name"
              sm={6}
            />
            <MuiTextInput
              name="password"
              type="password"
              label="Password"
            />
            <MuiTextInput
              name="passwordConfirmation"
              type="password"
              label="Repeat password"

            />
            <MuiTextInput
              name="email"
              type="email"
              label="Email address"
            />
            <MuiTextInput
              name="dateOfBirth"
              type="date"
              label="Date of birth"
            />
            <MuiTextInput
              name="country"
              type="text"
              label="Country of residence"
              sm={6}
            />
            <MuiTextInput
              name="postal"
              type="text"
              label="Postal code"
              sm={6}
            />
            <MuiTextInput
              name="phone"
              type="tel"
              label="Contact number"
            />
          </Grid>
        </MuiFormWrapper>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

export default EditAccountForm;