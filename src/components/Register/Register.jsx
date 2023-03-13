import { Box } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import RegisterForm from "./RegisterForm";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  dateOfBirth: "",
  country: "",
  postal: "",
  phone: "",
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
  country: Yup.string().required("Country is required"),
  postal: Yup.string().required("Postal code is required"),
  phone: Yup.string().required("Contact number is required"),
});

const Register = () => {
  const handleRegister = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        <RegisterForm />
      </Formik>
    </Box>
  );
};

export default Register;
