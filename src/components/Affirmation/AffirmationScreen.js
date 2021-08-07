import React from "react";
import AffirmationHeader from "./AffirmationHeader";
import "./Affirmation.css";

const AffirmationScreen = () => {
  return (
    <div>
      <AffirmationHeader />
      <section class="affirmation-body">
        <div class="container">
          <div class="affirmation-button">
            <button>Affirmation</button>
          </div>
          <div class="affirmation-text">
            <h6>Remainder</h6>
            <p>
              You're on track. It's literally playing out how its suppose to.
              Watch and see exactly how it all comes together
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AffirmationScreen;
