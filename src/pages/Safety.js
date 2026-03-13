import "./Safety.css";

export default function Safety() {
  return (
    <section className="safety">

      <div className="safety-container">

        {/* LEFT CONTENT */}

        <div className="safety-left">

          <div className="safety-tag">
            Safety & Trust
          </div>

          <h2 className="safety-title">
            AI proposes.<br/>
            humans decide.
          </h2>

          <p className="safety-desc">
            A rigorous human-in-the-loop architecture ensures every output
            is clinician-authorised.
          </p>

          <p className="safety-text">
            Adversarial AI continuously audits outputs for clinical errors,
            achieving hallucination rates below 1 in 100,000. Every automated
            summary, diagnosis, or note requires explicit physician review
            before it enters the record.
          </p>

          <h4 className="safety-highlight">
            The doctor decides. Always.
          </h4>

          <div className="safety-buttons">

            <button className="safety-btn">
              Human-in-the-Loop
            </button>

            <button className="safety-btn">
              Adversarial AI audit
            </button>

          </div>

        </div>


        {/* RIGHT IMAGE */}

        <div className="safety-image">

          <div className="image-placeholder">
            Product Photo
          </div>

        </div>

      </div>

    </section>
  );
}