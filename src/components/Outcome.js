import "./Outcome.css";

function Outcome() {
  return (
    <section className="outcome">

      <div className="outcome-container">

        <h2 className="outcome-heading">
          <span className="highlight">Arogya AI</span> to deliver faster care & better outcomes.
        </h2>

        <div className="slides-container">

          {/* SLIDE 1 */}

          <div className="slide">

            <div className="slide-text">
              <h3>Handles patient calls</h3>

              <p>
                Handles patient calls, schedules appointments, and manages
                front office communications with natural conversation
                capabilities.
              </p>
            </div>

            <div className="slide-image">
              <div className="image-placeholder">
                Product Photo
              </div>
            </div>

          </div>


          {/* SLIDE 2 */}

          <div className="slide">

            <div className="slide-text">
              <h3>AI Scribe</h3>

              <p>
                Automatically transcribes and structures patient conversations
                into clean clinical notes, eliminating burnout from manual
                documentation.
              </p>
            </div>

            <div className="slide-image">
              <div className="image-placeholder">
                Product Photo
              </div>
            </div>

          </div>


          {/* SLIDE 3 */}

          <div className="slide">

            <div className="slide-text">
              <h3>Radiology Insights</h3>

              <p>
                Automated analysis highlights abnormalities and assists
                radiologists in faster scan interpretation.
              </p>
            </div>

            <div className="slide-image">
              <div className="image-placeholder">
                Product Photo
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Outcome;