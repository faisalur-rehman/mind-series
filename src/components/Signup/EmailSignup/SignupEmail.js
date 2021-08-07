import React from "react";
import { useHistory } from "react-router-dom";
import SignupEmailForm from "./SignupEmailForm";

const SignupEmail = () => {
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    history.push("/");
  }
  return (
    <div>
      <SignupEmailForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignupEmail;
