import React,{useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from "../config/firebase";

export default function Register({ setLoggedIn }) {
    const history = useHistory();

    const [registrationError, setRegistrationError] = useState(null);

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
          await auth.createUserWithEmailAndPassword(auth ,values.email, values.password);
          setLoggedIn(true); // Set loggedIn to true upon successful registration
          history.push("/");
        } catch (error) {
          if (error.code === "auth/email-already-in-use") {
            setRegistrationError("Email is already in use.");
          } else {
            setRegistrationError("Registration failed. Please try again.");
            setFieldError("registrationError", "User not added");
          }
          setSubmitting(false);
        }
      },
    });

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center">
      <div className="bg-secondary rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-text">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Email input */}
          <div className="mb-4">

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="bg-primary text-text border rounded-md p-2 mb-4"
            />
            </div>
            <div className="mb-4">

          {/* Password input */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="bg-primary text-text border rounded-md p-2 mb-4"
            />
            </div>

          {formik.errors.registrationError ? (
            <div className="text-red-500 mb-4">{formik.errors.registrationError}</div>
          ) : null}

          {/* Register button */}
          <button
            type="submit"
            className="bg-accent hover:bg-yellow-400 active:bg-red-500 text-black text-lg font-semibold py-2 px-4 rounded-full"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
