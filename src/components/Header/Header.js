import React from "react";
import { Link, useHistory } from "react-router-dom";
import back50 from "../../Assets/images/icons8-back-to-50 1.png";
import iconSignout from "../../Assets/images/icons8-sign-out-30-2 2.png";

const Header = () => {
  const history = useHistory();
  function handleLogout() {
    localStorage.removeItem("token");
    history.push("/");
  }
  return (
    <header>
      <div class="container">
        <div class="account-header">
          <div class="header-left">
            <Link to="/journal">
              <img src={back50} alt="back-Icon" />
            </Link>
          </div>
          <div class="header-right" onClick={handleLogout}>
            <Link>
              <img src={iconSignout} alt="Sign Out" />
            </Link>
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
