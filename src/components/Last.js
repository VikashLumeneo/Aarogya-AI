import React from "react";
import "./Last.css";

import demoIcon from "../assets/images/demo.svg";

export default function Last() {
  return (
    <section className="last">

      <h2 className="last-title">
        Give your doctors their time back.
      </h2>

      <p className="last-text">
        Documentation shouldn’t take hours. With AI Scribe, every consultation
        ends with a complete clinical note ready to review, ready to submit.
      </p>

      <button className="last-btn">
        Request A Demo
        <img src={demoIcon} alt="demo"/>
      </button>

    </section>
  );
}