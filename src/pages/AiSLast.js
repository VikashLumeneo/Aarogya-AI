import React from "react";
import "./AiSLast.css";

import demoIcon from "../assets/images/demo.svg";

export default function AiSLast() {
  return (
    <section className="aislast" id="aislast">

      <div className="aislast-content">

        <h2 className="aislast-title">
          Give your doctors their time back.
        </h2>

        <p className="aislast-text">
          Documentation shouldn't take hours. With AI Scribe, every
          consultation ends with a complete clinical note - ready to review,
          ready to submit.
        </p>

        <button className="aislast-btn">
          Request a demo
          <img src={demoIcon} alt="demo" />
        </button>

      </div>

    </section>
  );
}