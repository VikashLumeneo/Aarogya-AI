import "./Core.css";

import img1 from "../assets/images/Real-time.svg";
import img2 from "../assets/images/Symptom.svg";
import img3 from "../assets/images/Context-aware.svg";
import img4 from "../assets/images/Multilingual.svg";

import arrow from "../assets/images/Arrow.svg";

function Core() {

  return (

    <section className="core">

      {/* HEADER */}

      <div className="core-header">

        <div className="core-tag">
          Core Capabilities
        </div>

        <h2>
          Every word. Every field. Every time.
        </h2>

        <p>
          AI Scribe captures what matters, structures it correctly,
          and delivers it where it needs to go automatically.
        </p>

      </div>


      {/* SECTION 1 */}

      <div className="core-row">

        <div className="core-text">

          <h3>Real-time transcription</h3>

          <h4>The consultation, captured as it happens.</h4>

          <p>
            Every word of the doctor-patient conversation is captured,
            structured and mapped to clinical fields.
          </p>

          <ul>
            <li><img src={arrow} alt="" /> Ambient listening</li>
            <li><img src={arrow} alt="" /> One-touch activation</li>
            <li><img src={arrow} alt="" /> Phone · tablet · PC</li>
            <li><img src={arrow} alt="" /> No training required</li>
          </ul>

        </div>

        <div className="core-image">
          <img src={img1} alt="Real time transcription" />
        </div>

      </div>


      {/* SECTION 2 */}

      <div className="core-row reverse">

        <div className="core-text">

          <h3>Symptom & history extraction</h3>

          <h4>Nothing missed. Nothing re-asked.</h4>

          <p>
            AI surfaces symptoms, medications, allergies and
            relevant history automatically during the consultation.
          </p>

          <ul>
            <li><img src={arrow} alt="" /> Auto symptom tagging</li>
            <li><img src={arrow} alt="" /> Medication detection</li>
            <li><img src={arrow} alt="" /> Allergy flagging</li>
            <li><img src={arrow} alt="" /> History mapping</li>
          </ul>

        </div>

        <div className="core-image">
          <img src={img2} alt="Symptom extraction" />
        </div>

      </div>


      {/* SECTION 3 */}

      <div className="core-row">

        <div className="core-text">

          <h3>Context-aware clinical prompts</h3>

          <h4>The question you almost forgot to ask.</h4>

          <p>
            When something important seems absent from the conversation,
            AI Scribe prompts the doctor with the right follow-up question.
          </p>

          <ul>
            <li><img src={arrow} alt="" /> Real-time prompts</li>
            <li><img src={arrow} alt="" /> Gap detection</li>
            <li><img src={arrow} alt="" /> Non-intrusive alerts</li>
            <li><img src={arrow} alt="" /> Clinician-controlled</li>
          </ul>

        </div>

        <div className="core-image">
          <img src={img3} alt="Clinical prompts" />
        </div>

      </div>


      {/* SECTION 4 */}

      <div className="core-row reverse">

        <div className="core-text">

          <h3>Multilingual support</h3>

          <h4>Every patient understood. Every note complete.</h4>

          <p>
            AI Scribe supports English and regional Indian languages
            so every patient can be understood.
          </p>

          <ul>
            <li><img src={arrow} alt="" /> English</li>
            <li><img src={arrow} alt="" /> Hindi</li>
            <li><img src={arrow} alt="" /> Tamil</li>
            <li><img src={arrow} alt="" /> Telugu</li>
          </ul>

        </div>

        <div className="core-image">
          <img src={img4} alt="Multilingual support" />
        </div>

      </div>

    </section>

  );
}

export default Core;