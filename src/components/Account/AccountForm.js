import React from "react";
import icon8 from "../../Assets/images/icons8-edit-30-2 1.png";
import iconCustomer from "../../Assets/images/icons8-customer-50 1.png";
import "./Account.css";
const AccountForm = () => {
  return (
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
          <form>
            <div class="account_fields">
              <div class="input_field">
                <input type="text" placeholder="First Name" />
              </div>
              <div class="input_field">
                <input type="text" placeholder="Last Name" />
              </div>
              <div class="input_field">
                <input type="email" placeholder="Email" />
              </div>
              <div class="submit_btn">
                <button type="submit">Save</button>
              </div>
            </div>
          </form>
          <div class="form-bottom">
            <a href="#1">
              <span>Reset Password</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountForm;
