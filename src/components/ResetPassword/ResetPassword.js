import React from "react";
import useApi from "../../hooks/useApi";
import ResetPasswordForm from "./ResetPasswordForm";
import * as api from "../../api/Api";
import { useHistory } from "react-router-dom";

const initialValues = {
  email: "",
};

const ResetPassword = () => {
  const { data, request } = useApi(api.resetPassword);
  const history = useHistory();
  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      await request({ ...formValues });
      localStorage.setItem("userEmail", formValues.email);
      setTimeout(() => {
        history.push("/forgot-password");
      }, 3000);
    } catch (_) {}
  }
  return (
    <div>
      <ResetPasswordForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        data={data}
      />
    </div>
  );
};

export default ResetPassword;
