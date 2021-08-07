import React from "react";
import iconSignOut from "../../Assets/images/icons8-sign-out-30-2 2.png";
import iconCustomer from "../../Assets/images/icons8-customer-50 1.png";
import iconNotification from "../../Assets/images/icons8-notification-30 1.png";

const JournalHeader = () => {
  return (
    <header>
      <div class="container">
        <div class="journal-header">
          <div class="journal-header-left"></div>
          <div class="journal-header-right">
            <div class="account">
              <a href="./Account.html">
                <img src={iconCustomer} alt="customer" />
              </a>
              <a href="./Account.html">
                <p>Account</p>
              </a>
            </div>
            <div class="affirmation">
              <a href="./affirmation.html">
                <img src={iconNotification} alt="Affirmation" />
              </a>
              <a href="./affirmation.html">
                <p>Affirmation</p>
              </a>
            </div>
            <div class="signout">
              <a href="./SignIn.html">
                <img src={iconSignOut} alt="Sign Out" />
              </a>
              <a href="./SignIn.html">
                <p>Sign Out</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default JournalHeader;
