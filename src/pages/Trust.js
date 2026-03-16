import "./Trust.css";
import TrustImage from "../assets/images/Trust.svg";

export default function Trust() {
  return (
    <section className="trust">

      <div className="trust-container">

        {/* LEFT CONTENT */}

        <div className="trust-left">

          <div className="trust-top">

            <div className="trust-tag">
              Safety & Trust
            </div>

            <h2 className="trust-title">
              AI proposes.<br />
              radiologists decide.
            </h2>

            <p className="trust-text">
              AI Radiologist is a decision support tool not a replacement for
              clinical judgement. Every finding, every report, and every diagnosis
              suggestion is presented for radiologist review and requires explicit
              physician authorisation before it enters the patient record. A
              rigorous human-in-the-loop architecture ensures every output is
              reviewed before it can affect care. Adversarial AI continuously
              audits outputs for clinical errors, achieving hallucination rates
              below 1 in 100,000.
            </p>

          </div>


          <div className="trust-bottom">

            <h4 className="trust-subtitle">
              The radiologist decides. Always.
            </h4>

            <div className="trust-badges">

              <div className="trust-badge badge-primary">
                Human-in-the-Loop
              </div>

              <div className="trust-badge badge-secondary">
                &lt;1 in 100k error rate
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}

        <div className="trust-right">
          <img src={TrustImage} alt="Trust model" />
        </div>

      </div>

    </section>
  );
}