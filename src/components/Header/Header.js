import React from "react";
import back50 from "../../Assets/images/icons8-back-to-50 1.png";
import iconSignout from "../../Assets/images/icons8-sign-out-30-2 2.png";

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="account-header">
          <div class="header-left">
            <a href="./SignIn.html">
              <img src={back50} alt="back-Icon" />
            </a>
          </div>
          <div class="header-right">
            <a href="./SignIn.html">
              <img src={iconSignout} alt="Sign Out" />
            </a>
            <a href="./SignIn.html">
              <p>Sign Out</p>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
