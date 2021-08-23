import { Field } from "formik";
import React from "react";
import logo from "../../Assets/images/logo.png";
import AppForm from "../AppForm/AppForm";

const ForgotPasswordForm = ({ handleSubmit, initialValues, data }) => {
  return (
    <div>
      <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
        <FormFields data={data} />
      </AppForm>
    </div>
  );
};

export default ForgotPasswordForm;
function FormFields({ data }) {
  console.log("reset", data);
  return (
    <>
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
                  name="verificationCode"
                  placeholder="Enter your verfication code"
                />
              </div>
              <div class="input_field">
                <Field name="password" placeholder="Enter your new password" />
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
