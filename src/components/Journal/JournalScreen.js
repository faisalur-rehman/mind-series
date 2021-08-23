import { Field } from "formik";
import React from "react";
import iconSave40 from "../../Assets/images/icons8-save-40 2.png";
import AppForm from "../AppForm/AppForm";
import JournalHeader from "./JournalHeader";

const JournalScreen = ({ initialValues, handleSubmit, data }) => {
  return (
    <div>
      <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
        <FormFields data={data} />
      </AppForm>
    </div>
  );
};

export default JournalScreen;

function FormFields({ data }) {
  console.log("dataaaa", data);
  return (
    <>
      <JournalHeader />
      <section class="journal-body">
        <div class="container">
          <div class="journal-button">
            <button>Pesonal Journal</button>
          </div>
          <div class="journal-date">
            <div>
              <h5>January 3 2021</h5>
            </div>
            <form action="">
              <div class="input-field">
                <label for="date">Enter journal entry date:</label>
                <Field name="entryDate" type="date" />
              </div>
            </form>
          </div>
          <div class="journal-form">
            <div class="journal-form_fields">
              <div class="input_field">
                <label for="">What are you grateful for today? </label>
                <div class="input_field_inner">
                  <Field name="journalTitle" placeholder="Type title..." />
                </div>
              </div>
              <div class="input_field">
                <label for="">
                  What went well today, and what could have been improved?
                </label>
                <div class="input_field_inner_2">
                  <Field
                    name="journalDescription"
                    type="text"
                    class=""
                    placeholder="Type text..."
                  />
                  <button
                    style={{ backgroundColor: "#152238" }}
                    class="save"
                    type="submit"
                  >
                    <img src={iconSave40} alt="" />
                    <p>Save</p>
                  </button>
                </div>
                <p style={{ color: "white" }}>{data && data.message}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
