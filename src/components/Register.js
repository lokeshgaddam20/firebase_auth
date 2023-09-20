import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { auth } from "../config/firebase";

function Register() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid email address"),
      password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        await auth.createUserWithEmailAndPassword(values.email, values.password);
        history.push("/");
      } catch (error) {
        setFieldError("registrationError", "Registration failed. Please try again.");
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

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="error">{formik.errors.password}</div>
      ) : null}

      {formik.errors.registrationError ? (
        <div className="error">{formik.errors.registrationError}</div>
      ) : null}

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
