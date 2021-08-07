import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import "./Signup.css";

const SignupForm = ({ handleSubmit }) => {
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
              <div class="name_field">
                <div class="name">
                  <input type="text" placeholder="First Name" />
                </div>
                <div class="name">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>

              <div class="input_field">
                <input type="email" placeholder="UserName" />
              </div>
              <div class="submit_btn">
                <button type="submit">Next</button>
              </div>
            </div>
          </form>
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
};

export default SignupForm;
