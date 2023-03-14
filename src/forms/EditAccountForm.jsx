import { Grid } from "@mui/material";
import { useFormik } from "formik";
import MuiFormWrapper from "../components/common/forms/MuiFormWrapper";
import MuiTextInput from "../components/common/forms/MuiTextInput";

const EditAccountForm = ({ userInfo, showEditForm }) => {
    const formik = useFormik({
      initialValues: userInfo,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  
    return (
      <>
        {showEditForm && (
          <form onSubmit={formik.handleSubmit}>
            <MuiFormWrapper headerText="EditForm">
              <Grid container spacing={2}>
                <MuiTextInput
                  name="firstName"
                  type="text"
                  label="First Name"
                  sm={6}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                <MuiTextInput
                  name="lastName"
                  type="text"
                  label="Last Name"
                  sm={6}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
                <MuiTextInput
                  name="password"
                  type="password"
                  label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <MuiTextInput
                  name="passwordConfirmation"
                  type="password"
                  label="Repeat password"
                  value={formik.values.passwordConfirmation}
                  onChange={formik.handleChange}
                />
                <MuiTextInput
                  name="email"
                  type="email"
                  label="Email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <MuiTextInput
                  name="dateOfBirth"
                  type="date"
                  label="Date of birth"
                  value={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                />
                <MuiTextInput
                  name="country"
                  type="text"
                  label="Country of residence"
                  sm={6}
                  value={formik.values.country}
                  onChange={formik.handleChange}
                />
                <MuiTextInput
                  name="postal"
                  type="text"
                  label="Postal code"
                  sm={6}
                  value={formik.values.postal}
                  onChange={formik.handleChange}
                />
                <MuiTextInput
                  name="phone"
                  type="tel"
                  label="Contact number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
              </Grid>
            </MuiFormWrapper>
            <button type="submit">Submit</button>
          </form>
        )}
      </>
    );
  };
  
  export default EditAccountForm;