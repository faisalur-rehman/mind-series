import React from "react";
import logo from "../../Assets/images/logo.png";
import "./ResetPassword.css";
import backTo from "../../Assets/images/icons8-back-to-50 1.png";
import { Field } from "formik";
import AppForm from "../AppForm/AppForm";
import { Link } from "react-router-dom";

const ResetPasswordForm = ({ handleSubmit, initialValues, data }) => {
  return (
    <>
      <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
        <FormFields data={data} />
      </AppForm>
    </>
  );
};

export default ResetPasswordForm;

function FormFields({ data }) {
  console.log("reset", data);
  return (
    <>
      <header>
        <div class="container">
          <div class="reset-password-header">
            <div class="header-left">
              <Link to="/account">
                <img src={backTo} alt="back-Icon" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section class="reset_password_section">
        <a href="#1">
          <img src={logo} alt="" />
        </a>
        <h3>Reset Password</h3>
        <p>
          Enter the email associated with your account and we’ll send an email
          with instructions to reset your password.
        </p>
        <div class="reset_password_container">
          <div class="reset_password_form">
            <div class="reset_password_fields">
              <div class="input_field">
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <p style={{ color: "white", margin: 10 }}>
                {data && data.message}
              </p>
              <div class="submit_btn">
                <button type="submit">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
