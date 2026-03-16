import "./ImpactStats.css";

function ImpactStats() {
  return (
    <section className="impact">

      <div className="impact-container">

        <h2 className="impact-title">
          3 Impact statistics
        </h2>

        <div className="impact-card">

          <div className="impact-item">
            <p className="impact-number">2–3 hrs</p>
            <p className="impact-text">
              Saved per doctor per day on documentation
            </p>
          </div>

          <div className="impact-item">
            <p className="impact-number">&lt;1 in 100K</p>
            <p className="impact-text">
              Hallucination rate via adversarial AI audit
            </p>
          </div>

          <div className="impact-item">
            <p className="impact-number">10+</p>
            <p className="impact-text">
              Indian languages supported natively
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ImpactStats;