import "./Core.css";

import img1 from "../assets/images/SGraphic1.svg";
import img2 from "../assets/images/SGraphic2.svg";
import img3 from "../assets/images/SGraphic3.svg";
import img4 from "../assets/images/Multilingual.svg";

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
           <br/> <span>Every time.</span>
          </h2>

          <p className="core-desc">
            AI Scribe captures what matters, structures it correctly,
            and delivers it where it needs to go automatically,
            every consultation.
          </p>

        </div>


        {/* ROW 1 */}

        <div className="core-row">

          <div className="core-text">

            <h3>Real time transcription</h3>

            <h4>The consultation, captured as it happens.</h4>

            <p>
              Every word of the doctor-patient conversation is captured,
              structured and mapped to clinical fields like HPI, ROS and PE
              without touching a keyboard.
            </p>

            <ul>
              <li>Ambient listening</li>
              <li>One-touch activation</li>
              <li>Phone · Tablet · PC</li>
              <li>No training required</li>
            </ul>

          </div>

          <div className="core-image">
            <img src={img1} alt="" />
          </div>

        </div>


        {/* ROW 2 */}

        <div className="core-row reverse">

          <div className="core-text">

            <h3>Symptom & history extraction</h3>

            <h4>Nothing missed. Nothing re-asked.</h4>

            <p>
              AI Scribe surfaces symptoms, medications, allergies and
              relevant history as the conversation unfolds so the
              patient record is complete when the consultation ends.
            </p>

            <ul>
              <li>Auto symptom tagging</li>
              <li>Medication detection</li>
              <li>Allergy flagging</li>
              <li>History mapping</li>
            </ul>

          </div>

          <div className="core-image">
            <img src={img2} alt="" />
          </div>

        </div>


        {/* ROW 3 */}

        <div className="core-row">

          <div className="core-text">

            <h3>Context aware clinical prompts</h3>

            <h4>The question you almost forgot to ask.</h4>

            <p>
              When something important is missing from the conversation,
              AI Scribe prompts the doctor with the right follow-up
              question instantly.
            </p>

            <ul>
              <li>Real-time prompts</li>
              <li>Gap detection</li>
              <li>Non-intrusive alerts</li>
              <li>Clinician-controlled</li>
            </ul>

          </div>

          <div className="core-image">
            <img src={img3} alt="" />
          </div>

        </div>


        {/* ROW 4 */}

        <div className="core-row reverse">

          <div className="core-text">

            <h3>Multilingual support</h3>

            <h4>Every patient understood.</h4>

            <p>
              AI Scribe supports English and regional Indian languages
              so every patient can be understood and every doctor can
              document in their preferred language.
            </p>

            <ul>
              <li>English</li>
              <li>Hindi</li>
              <li>Tamil</li>
              <li>Telugu</li>
            </ul>

          </div>

          <div className="core-image">
            <img src={img4} alt="" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Core;