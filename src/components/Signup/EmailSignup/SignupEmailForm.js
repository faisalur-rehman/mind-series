import { Field } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";
import AppForm from "../../AppForm/AppForm";

const SignupEmailForm = ({ handleSubmit, initialValues, response }) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields response={response} />
    </AppForm>
  );
};

export default SignupEmailForm;

function FormFields({ response }) {
  return (
    <section class="signup_section">
      <div class="signup_container">
        <a href="#1">
          <img src={logo} alt="" />
        </a>
        <div class="signup_form">
          <h3>Sign up</h3>
          <div class="signup_fields">
            <div class="input_field">
              <Field name="email" type="email" placeholder="Email" />
            </div>
            <div class="input_field">
              <Field name="password" placeholder="Set Password" />
            </div>
            <div class="input_field">
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <p style={{ color: "red", margin: "10" }}>{response}</p>
            <div class="submit_btn">
              <button type="submit">Next</button>
            </div>
          </div>
          <div class="form-bottom">
            <p>
              Already a User?
              <Link to="/">
                <span>Login Here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
