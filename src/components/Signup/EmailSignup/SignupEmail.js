import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import SignupEmailForm from "./SignupEmailForm";
import * as api from "../../../api/Api";
const initialValues = {
  email: "",
  password: "",
};

const SignupEmail = () => {
  const [response, setResponse] = useState("");
  const history = useHistory();
  const { error, data, request } = useApi(api.signupEmail);

  async function handleSubmit({ formValues }) {
    console.log("form values", formValues);
    if (formValues.password !== formValues.confirmPassword) {
      setResponse("Password Does not match");
    } else {
      try {
        const { data } = await request({
          userId: localStorage.getItem("userId"),
          email: formValues.email,
          password: formValues.password,
        });
        // localStorage.setItem("token", data.token);
        // localStorage.setItem("isAdmin", data.isAdmin);
        history.push("/");
      } catch (_) {}
      setResponse("");
    }
    console.log("form", data);
  }
  return (
    <div>
      <SignupEmailForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        response={response}
      />
    </div>
  );
};

export default SignupEmail;
