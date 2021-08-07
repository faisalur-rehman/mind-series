import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/logo.png";

const SignupEmailForm = ({ handleSubmit }) => {
  return (
    <section class="signup_section">
      <div class="signup_container">
        <a href="#1">
          <img src={logo} alt="" />
        </a>
        <div class="signup_form">
          <h3>Sign up</h3>
          <form onSubmit={handleSubmit}>
            <div class="signup_fields">
              <div class="input_field">
                <input type="email" placeholder="Email" />
              </div>
              <div class="input_field">
                <input type="password" placeholder="Set Password" />
              </div>
              <div class="input_field">
                <input type="password" placeholder="Confirm Password" />
              </div>
              <div class="submit_btn">
                <button type="submit">Next</button>
              </div>
            </div>
          </form>
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
};

export default SignupEmailForm;
