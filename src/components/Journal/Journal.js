import React from "react";
import JournalScreen from "./JournalScreen";
import "./Journal.css";
import { useHistory } from "react-router-dom";
import useApi from "../../hooks/useApi";
import * as api from "../../api/Api";
const initialValues = {
  journalTitle: "",
  journalDescription: "",
  entryDate: "",
};

const Journal = () => {
  const history = useHistory;
  const { error, data, request } = useApi(api.addJournal);

  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    try {
      const { data } = await request({ ...formValues });
      console.log("journal", data);

      // history.push("/journal");
    } catch (_) {}
  }
  return (
    <div>
      <JournalScreen
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        data={data}
      />
    </div>
  );
};

export default Journal;
