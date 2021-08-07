import React from "react";
import iconCustomer from "../../Assets/images/icons8-customer-50 1.png";
import iconJournal from "../../Assets/images/icons8-journal-30 2.png";
import iconSignout from "../../Assets/images/icons8-sign-out-30-2 2.png";

const AffirmationHeader = () => {
  return (
    <header>
      <div class="container">
        <div class="affirmation-header">
          <div class="affirmation-header-left"></div>
          <div class="affirmation-header-right">
            <div class="account">
              <a href="./Account.html">
                <img src={iconCustomer} alt="Account" />
              </a>
              <a href="./Account.html">
                <p>Account</p>
              </a>
            </div>
            <div class="journal">
              <a href="./journal.html">
                <img src={iconJournal} alt="Journal" />
              </a>
              <a href="./journal.html">
                <p>Journal</p>
              </a>
            </div>
            <div class="signout">
              <a href="./SignIn.html">
                <img src={iconSignout} alt="Sign Out" />
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

export default AffirmationHeader;
