import React from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  const history = useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    history.push("/journal");
  }

  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
