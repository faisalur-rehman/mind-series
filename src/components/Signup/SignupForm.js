import { Field } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import AppForm from "../AppForm/AppForm";
import "./Signup.css";

const SignupForm = ({ initialValues, handleSubmit }) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields />
    </AppForm>
  );
};

export default SignupForm;

function FormFields() {
  return (
    <section class="signup_section">
      <div class="signup_container">
        <a href="#1">
          <img src={logo} alt="" />
        </a>
        <div class="signup_form">
          <h3>Sign up</h3>

          <div class="signup_fields">
            <div class="name_field">
              <div class="name">
                <Field name="firstName" placeholder="First Name" />
              </div>
              <div class="name">
                <Field name="lastName" placeholder="Last Name" />
              </div>
            </div>

            <div class="input_field">
              <Field name="userName" placeholder="UserName" />
            </div>
            <div class="submit_btn">
              <button type="submit">Next</button>
            </div>
          </div>
          <div class="form-bottom">
            <p>
              Already a User?{" "}
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
