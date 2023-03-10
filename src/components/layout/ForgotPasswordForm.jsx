import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const ChangePasswordForm = ({ values, handleSubmit }) => (
    <Form>
      <Field name="currentPassword" placeholder="Current Password" />
      <Field name="newPassword" placeholder="New Password" />
      <button type="submit">Change</button>
    </Form>
  );

  const changeForm = withFormik({
    mapPropsToValues({ currentPassword, newPassword }) {
      return {
        currentPassword: currentPassword || "",
        newPassword: newPassword || "",
      };
    },
    validationSchema: Yup.object().shape({
      currentPassword: Yup.string().required("Required"),
      newPassword: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Required")
    }),
    handleSubmit(values, { resetForm, setSubmitting }) {
      setSubmitting(false);
    }
  })

  export default ChangePasswordForm;
