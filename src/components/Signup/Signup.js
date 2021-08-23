import React from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import SignupForm from "./SignupForm";
import * as api from "../../api/Api";

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
};

const Signup = () => {
  const history = useHistory();
  const { error, data, request } = useApi(api.signup);
  async function handleSubmit({ formValues }) {
    try {
      const { data } = await request({
        ...formValues,
      });
      localStorage.setItem("userId", data.user._id);
      history.push("/sign-up-email");
    } catch (_) {}
  }

  return (
    <div>
      <SignupForm handleSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
};

export default Signup;
