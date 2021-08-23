import React from "react";
import icon8 from "../../Assets/images/icons8-edit-30-2 1.png";
import iconCustomer from "../../Assets/images/icons8-customer-50 1.png";
import "./Account.css";
import AppForm from "../AppForm/AppForm";
import { Field } from "formik";
import { Link } from "react-router-dom";

const AccountForm = ({ initialValues, handleSubmit, data }) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
      <FormFields data={data} />
    </AppForm>
  );
};

export default AccountForm;

function FormFields({ data }) {
  console.log("profile", data);
  return (
    <>
      <section class="account_section">
        <div class="account_container">
          <div class="user">
            <div class="user-image">
              <img src={iconCustomer} alt="" />
            </div>
            <div class="user-edit">
              <img src={icon8} alt="" />
            </div>
          </div>
          <div class="user-name">
            <p>User Name</p>
          </div>
          <div class="membership">
            <p>Member Since Jan 2021</p>
          </div>
          <div class="account_form">
            <h3>Edit Your Details</h3>
            <div class="account_fields">
              <div class="input_field">
                <Field name="firstName" type="text" placeholder="First Name" />
              </div>
              <div class="input_field">
                <Field name="lastName" type="text" placeholder="Last Name" />
              </div>
              <div class="input_field">
                <Field name="password" type="password" placeholder="Password" />
              </div>
              <p style={{ color: "white", margin: 10 }}>
                {data && data.message}
              </p>
              <div class="submit_btn">
                <button type="submit">Save</button>
              </div>
            </div>
            <div class="form-bottom">
              <Link to="/reset-password">
                <span>Reset Password</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
