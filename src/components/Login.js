import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { auth } from "../config/firebase";

function Login() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid email address"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        await auth.signInWithEmailAndPassword(values.email, values.password);
        history.push("/");
      } catch (error) {
        setFieldError("loginError", "Invalid email or password");
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center">
    <div className="bg-secondary rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Email input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="bg-primary text-text border rounded-md p-2 mb-4"
        />

        {/* Password input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="bg-primary text-text border rounded-md p-2 mb-4"
        />

        {formik.errors.loginError ? (
          <div className="text-red-500 mb-4">{formik.errors.loginError}</div>
        ) : null}

        {/* Login button */}
        <button
          type="submit"
          className="bg-accent hover:bg-yellow-400 active:bg-red-500 text-black text-lg font-semibold py-2 px-4 rounded-full"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  );
}

export default Login;
