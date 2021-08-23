import React, { useState, useEffect } from "react";
import useApi from "../../hooks/useApi";
import Layout from "../Layout/Layout";
import AccountForm from "./AccountForm";
import * as api from "../../api/Api";

const initialValues = {
  firstName: "",
  lastName: "",
  password: "",
};

const Account = () => {
  const getProfile = useApi(api.getProfile);
  const updateProfile = useApi(api.updateProfile);
  const [, setValues] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getProfile.request();
        data && console.log("get ", data);
        initialValues.firstName = data.firstName;
        initialValues.lastName = data.lastName;
        setValues(data);
      } catch (_) {}
    }
    fetchData();
    //eslint-disable-next-line
  }, []);

  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      await updateProfile.request({ ...formValues });

      // history.push("/journal");
    } catch (_) {}
  }

  return (
    <Layout>
      <AccountForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        data={updateProfile.data}
      />
    </Layout>
  );
};

export default Account;
