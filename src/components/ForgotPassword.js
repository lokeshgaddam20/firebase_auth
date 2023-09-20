import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { auth } from "../config/firebase";

function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid email address"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        await auth.sendPasswordResetEmail(values.email);
        // Display a message to inform the user to check their email
      } catch (error) {
        setFieldError("resetError", "Failed to reset password. Please try again.");
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}

      {formik.errors.resetError ? <div className="error">{formik.errors.resetError}</div> : null}

      <button type="submit">Reset Password</button>
    </form>
  );
}

export default ForgotPassword;
