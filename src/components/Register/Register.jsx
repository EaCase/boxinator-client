import { Box, CircularProgress } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useGetCountriesQuery } from "../../services/settings";
import RegisterForm from "./RegisterForm";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  dateOfBirth: "",
  country: "",
  zipCode: "",
  contactNumber: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().required("Please enter email").email("Invalid email"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  dateOfBirth: Yup.date().required("Date of birth is required"),
  country: Yup.object().shape({
    id: Yup.number().required("Required"),
    name: Yup.string().required("Required"),
  }),
  zipCode: Yup.string().required("Postal code is required"),
  contactNumber: Yup.string().required("Contact number is required"),
});

const Register = ({ handleRegister, isClaiming, registerError }) => {
  const { data: countries, isSuccess: countriesFetched } =
    useGetCountriesQuery();

  if (!countriesFetched) return <CircularProgress />;

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleRegister(values)}
      >
        <RegisterForm
          countries={countries}
          isClaiming={isClaiming}
          registerError={registerError}
        />
      </Formik>
    </Box>
  );
};

export default Register;
