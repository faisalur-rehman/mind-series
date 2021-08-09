import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import "./Login.css";

const LoginForm = ({ handleSubmit }) => {
  return (
    <section class="login_section">
      <div class="login_container">
        <a href="#1">
          <img src={logo} alt="" />
        </a>
        <div class="login_form">
          <h3>Sign In</h3>
          <form onSubmit={handleSubmit}>
            <div class="login_fields">
              <div class="input_field">
                <input type="email" placeholder="Email/UserName" />
              </div>
              <div class="input_field">
                <input type="password" placeholder="Password" />
              </div>
              <div class="submit_btn">
                <button type="submit">Sign In</button>
              </div>
            </div>
          </form>
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
};

export default LoginForm;
