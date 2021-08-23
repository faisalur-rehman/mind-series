import React from "react";
import iconSignOut from "../../Assets/images/icons8-sign-out-30-2 2.png";
import iconCustomer from "../../Assets/images/icons8-customer-50 1.png";
import iconNotification from "../../Assets/images/icons8-notification-30 1.png";
import { Link, useHistory } from "react-router-dom";

const JournalHeader = () => {
  const history = useHistory();
  function handleLogout() {
    localStorage.removeItem("token");
    history.push("/");
  }
  return (
    <header>
      <div class="container">
        <div class="journal-header">
          <div class="journal-header-left"></div>
          <div class="journal-header-right">
            <div class="account">
              <Link to="/account">
                <img src={iconCustomer} alt="customer" />
              </Link>
              <Link to="/account">
                <p>Account</p>
              </Link>
            </div>

            <div class="signout" onClick={handleLogout}>
              <Link>
                <img src={iconSignOut} alt="Sign Out" />
              </Link>
              <Link>
                <p>Sign Out</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default JournalHeader;
