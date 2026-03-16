import "./Safety.css";

export default function Safety() {
  return (
    <section className="safety">

      <div className="safety-container">

        {/* TAG */}
        <div className="safety-tag">
          Safety & Trust
        </div>

        {/* TITLE */}
        <h2 className="safety-title">
          AI proposes. <br />
          humans decide.
        </h2>

        {/* DESCRIPTION */}
        <p className="safety-desc">
          A rigorous human-in-the-loop architecture ensures every <br/>output is
          clinician-authorised. Adversarial AI continuously <br/>audits outputs,
          achieving hallucination rates below 1 in 100,000.
        </p>

        {/* FLOW */}
        <div className="safety-flow">

          <div className="flow-box">
            AI Proposal
          </div>

          <div className="flow-arrow" />

          <div className="flow-box blue">
            Adversarial AI Check
          </div>

          <div className="flow-arrow" />

          <div className="flow-box primary">
            Human Expert Authorisation
          </div>

        </div>

        {/* FOOT TEXT */}
        <h4 className="safety-highlight">
          The doctor decides. Always.
        </h4>

        {/* TAGS */}
        <div className="safety-tags">

          <span>Human-in-the-Loop</span>
          <span>Adversarial AI Audit</span>
          <span>{"<1 in 100,000 Hallucination Rate"}</span>
          <span>Physician Authorisation Required</span>

        </div>

      </div>

    </section>
  );
}