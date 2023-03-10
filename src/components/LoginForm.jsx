import React from 'react';
import { Formik } from 'formik';
import { Link } from "react-router-dom";
import * as yup from "yup";

const validationSchema = yup.object({
    username: yup
      .string('Enter your username')
      .email('Enter a valid username')
      .required('Username is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
 
 const LoginForm = () => (
   <div>
     <h1>User Login</h1>

     <Formik
       initialValues={{ username: '', password: '' }}
       schema={validationSchema}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
         <form onSubmit={handleSubmit}>
            <label>Username:</label>
           <input
             type="username"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}
             label="username"
           />
           {errors.username && touched.username && errors.username}

           <label>Password:</label>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <button type="submit" disabled={isSubmitting}>
             Login
           </button>

           <Link to="/Register">Register instead</Link>
           <Link to="/ForgotPasswordForm">Forgot Password?</Link>

         </form>
       )}
     </Formik>
   </div>
 );
 
 export default LoginForm;