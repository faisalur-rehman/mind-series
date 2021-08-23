import React from "react";
import useApi from "../../hooks/useApi";
import * as api from "../../api/Api";
import ForgotPasswordForm from "./ForgotPasswordFotm";

const initialValues = {
  verificationCode: "",
  password: "",
};

const ForgotPassword = () => {
  const { data, request } = useApi(api.forgotPassword);
  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      await request({
        email: localStorage.getItem("userEmail"),
        ...formValues,
      });
      setTimeout(() => {}, 3000);
      // history.push("/journal");
    } catch (_) {}
  }
  console.log("forgot", data);
  return (
    <div>
      <ForgotPasswordForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        data={data}
      />
    </div>
  );
};

export default ForgotPassword;
