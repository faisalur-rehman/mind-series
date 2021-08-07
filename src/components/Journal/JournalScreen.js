import React from "react";
import iconSave40 from "../../Assets/images/icons8-save-40 2.png";
import JournalHeader from "./JournalHeader";

const JournalScreen = () => {
  return (
    <div>
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
                <input type="date" />
              </div>
            </form>
          </div>
          <div class="journal-form">
            <form action="">
              <div class="journal-form_fields">
                <div class="input_field">
                  <label for="">What are you grateful for today? </label>
                  <div class="input_field_inner">
                    <input type="email" placeholder="Type text..." />
                    <div class="save">
                      <img src={iconSave40} alt="" />
                      <p>Save</p>
                    </div>
                  </div>
                </div>
                <div class="input_field">
                  <label for="">
                    What went well today, and what could have been improved?
                  </label>
                  <div class="input_field_inner_2">
                    <input type="text" class="" placeholder="Type text..." />
                    <div class="save">
                      <img src={iconSave40} alt="" />
                      <p>Save</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalScreen;
