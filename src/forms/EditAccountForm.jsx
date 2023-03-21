import { Grid } from "@mui/material";
import { Formik, Form } from "formik";
import { Button } from "@mui/material";
import MuiFormWrapper from "../components/common/forms/MuiFormWrapper";
import MuiTextInput from "../components/common/forms/MuiTextInput";

const EditAccountForm = ({ handleCancelClick }) => {

  return (
      <Form>
        <MuiFormWrapper headerText="Your Account Details">
          <Grid container spacing={2}>
          <MuiTextInput
                name="firstName"
                type="text"
                label="First Name"
              />
              <MuiTextInput
                name="lastName"
                type="text"
                label="Last Name"
              />
              <MuiTextInput
                name="password"
                type="password"
                label="Password"
              />
              <MuiTextInput
                name="passwordConfirmation"
                type="password"
                label="Confirm Password"
              />
              <MuiTextInput
                name="email"
                type="email"
                label="Email"
              />
              <MuiTextInput
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
              />
              <MuiTextInput
                name="country"
                type="text"
                label="Country of residence"
              />
              <MuiTextInput
                name="postal"
                type="text"
                label="Postal code"
              />
              <MuiTextInput
                name="phone"
                type="tel"
                label="Phone number"
              />
          </Grid>
          <Grid container
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
  <>
   
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      style={{ width: "45%" }}
    >
      Save
    </Button>
    <Button
      type="button"
      fullWidth
      variant="contained"
      style={{ width: "45%" }}
      onClick={handleCancelClick}
    >
      Cancel
    </Button>
    </>
            </Grid>
          </MuiFormWrapper>
        </Form>
  );
}


export default EditAccountForm;