import "./Core.css";

import img1 from "../assets/images/SGraphic1.svg";
import img2 from "../assets/images/SGraphic2.svg";
import img3 from "../assets/images/SGraphic3.svg";
import img4 from "../assets/images/SGraphic4.svg";

function Core() {
  return (
    <section className="core">

      <div className="core-container">

        {/* HEADER */}

        <div className="core-header">

          <div className="core-tag">
            Core Capabilities
          </div>

          <h2 className="core-title">
            Every word. Every field.
            <br/>
            <span>Every time.</span>
          </h2>

        </div>


        {/* ROW 1 */}

        <div className="core-row">

          <div className="core-content">

            <div className="core-pill">
              Real-time Transcription
            </div>

            <h3>
              The consultation,
              <br/>captured as it happens.
            </h3>

            <p>
              Every word of the doctor-patient conversation is captured,
              structured, and mapped to clinical fields History of Present
              Illness, Review of Systems, Physical Exam without touching a
              keyboard.
            </p>

            <div className="core-buttons">
              <span>Ambient listening</span>
              <span>One-touch activation</span>
              <span className="light">No training required</span>
            </div>

          </div>

          <div className="core-image">
            <img src={img1} alt="" />
          </div>

        </div>


        {/* ROW 2 */}

        <div className="core-row reverse">

          <div className="core-content">

            <div className="core-pill">
              Symptom & History Extraction
            </div>

            <h3>
              Nothing missed.
              Nothing re-asked.
            </h3>

            <p>
              Symptoms, medications, allergies, and history surfaced as the
              conversation unfolds.
            </p>

            <div className="row2-buttons">
              <div className="row2-top">
                <span>Auto symptom tagging</span>
                <span>Medication detection</span>
              </div>

              <span className="row2-light">
                Allergy flagging
              </span>
            </div>

          </div>

          <div className="core-image">
            <img src={img2} alt="" />
          </div>

        </div>


       {/* ROW 3 */}

<div className="core-row">

  <div className="core-content">

    <div className="core-pill">
      Context-Aware Clinical Prompts
    </div>

    <h3>
      The question you almost
      forgot to ask.
    </h3>

    <p>
      When something important seems absent from the conversation,
      AI Scribe prompts the doctor with the right follow-up
      question in the moment, not after the patient has left.
    </p>

    <div className="core-buttons">
      <span>Real-Time Prompts</span>
      <span>Gap Detection</span>
      <span className="light">Non-Intrusive</span>
    </div>

  </div>

  <div className="core-image">
    <img src={img3} alt="" />
  </div>

</div>

{/* ROW 4 */}

<div className="core-row reverse">

  <div className="core-content">

    <div className="core-pill">
      Multilingual By Design
    </div>

    <h3>
      Every patient understood.
      <br/>
      Every note complete.
    </h3>

    <p>
      Supports English and regional Indian languages natively.
      Note always generated in the physician's preferred language.
    </p>

    <div className="core-buttons">
      <span>English</span>
      <span>Hindi</span>
      <span>Tamil</span>
      <span className="light">+ More</span>
    </div>

  </div>

  <div className="core-image">
    <img src={img4} alt="Multilingual Support"/>
  </div>

</div>
      </div>

    </section>
  );
}

export default Core;