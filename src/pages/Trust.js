import React from "react";
import "./Trust.css";
import TrustImg from "../assets/images/Trust.svg";

function Trust() {
  return (
    <section className="trust">

      <div className="trust-container">

        {/* LEFT SIDE */}

        <div className="trust-left">

          <div className="trust-top">

            <div className="trust-tag">
              Safety & Trust
            </div>

            <h2 className="trust-title">
              AI proposes.<br />
              radiologists decide.
            </h2>

            <p className="trust-desc">
              AI Radiologist is a decision support tool not a replacement for
              clinical judgement. Every finding, every report, and every
              diagnosis suggestion is presented for radiologist review and
              requires explicit physician authorisation before it enters the
              patient record.
              <br /><br />
              A rigorous human-in-the-loop architecture ensures every output is
              reviewed before it can affect care. Adversarial AI continuously
              audits outputs for clinical errors, achieving hallucination rates
              below 1 in 100,000.
            </p>

          </div>


          <div className="trust-bottom">

            <h4 className="trust-subtitle">
              The radiologist decides. Always.
            </h4>

            <div className="trust-buttons">

              <div className="trust-btn primary">
                Human-in-the-Loop
              </div>

              <div className="trust-btn secondary">
                &lt;1 in 100k error rate
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE IMAGE */}

        <div className="trust-right">
          <img src={TrustImg} alt="Human in the loop model" />
        </div>

      </div>

    </section>
  );
}

export default Trust;