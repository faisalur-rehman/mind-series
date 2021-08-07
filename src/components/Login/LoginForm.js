import React from "react";
import logo from "../../Assets/images/logo.png";
import "./Login.css";

const LoginForm = () => {
  return (
    <section class="login_section">
      <div class="login_container">
        <a href="#1">
          <img src={logo} alt="" />
        </a>
        <div class="login_form">
          <h3>Sign In</h3>
          <form action="./journal.html">
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
            <a href="./reset_password.html">
              <p>Forgot Password</p>
            </a>
            <a href="./signup.html">
              <p>Not a member yet?</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;