import React from "react";
import "./Last.css";
import demoIcon from "../assets/images/demo.svg";

export default function Last() {
  return (
    <section className="last">

      <div className="last-container">

        <div className="last-content">

          <h2 className="last-title">
            The future of clinical intelligence is here
          </h2>

          <p className="last-text">
            Doctors should spend their time on patients not documentation, not
            scan queues, not paperwork.
          </p>

        </div>

        <button className="last-btn">
          Request a demo
          <img src={demoIcon} alt="demo"/>
        </button>

      </div>

    </section>
  );
}