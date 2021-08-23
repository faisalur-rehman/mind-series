import { Field } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import AppForm from "../AppForm/AppForm";
import "./Login.css";

const LoginForm = ({ initialValues, handleSubmit, error }) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields error={error} />
    </AppForm>
  );
};

export default LoginForm;

function FormFields({ error }) {
  return (
    <section class="login_section">
      <div class="login_container">
        <a href="#1">
          <img src={logo} alt="" />
        </a>
        <div class="login_form">
          <h3>Sign In</h3>

          <div class="login_fields">
            <div class="input_field">
              <Field name="userName" placeholder="Email/UserName" />
            </div>
            <div class="input_field">
              <Field name="password" type="password" placeholder="Password" />
            </div>
            <p style={{ color: "red", margin: 10 }}>
              {error.data && error.data.message}
            </p>
            <div class="submit_btn">
              <button type="submit">Sign In</button>
            </div>
          </div>
          <div class="text-section">
            <Link to="/reset-password">
              <p>Forgot Password</p>
            </Link>
            <Link to="/sign-up">
              <p>Not a member yet? Signup</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
