import React from "react";
import logo from "../../Assets/images/logo.png";
import "./ResetPassword.css";
import backTo from "../../Assets/images/icons8-back-to-50 1.png";

const ResetPasswordForm = () => {
  return (
    <>
      <header>
        <div class="container">
          <div class="reset-password-header">
            <div class="header-left">
              <a href="./SignIn.html">
                <img src={backTo} alt="back-Icon" />
              </a>
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
            <form>
              <div class="reset_password_fields">
                <div class="input_field">
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div class="submit_btn">
                  <button type="submit">Reset</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPasswordForm;
