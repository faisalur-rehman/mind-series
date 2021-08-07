import React from "react";
import { useHistory } from "react-router-dom";
import SignupForm from "./SignupForm";

const Signup = () => {
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    history.push("/sign-up-email");
  }

  return (
    <div>
      <SignupForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Signup;
