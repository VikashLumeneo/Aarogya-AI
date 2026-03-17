import "./Outcome.css";

// 👇 SVG / IMAGES
import Product1 from "../assets/images/Product1.jpg";
import Product2 from "../assets/images/Product2.jpg";
import Product3 from "../assets/images/Product3.jpg";
import Product4 from "../assets/images/Product4.jpg";
import Product5 from "../assets/images/Product5.jpg";
import Product6 from "../assets/images/Product6.jpg";

export default function Outcome(){
  return(

    <section className="outcome">

      <div className="outcome-container">

        <div className="outcome-header">

          <p className="outcome-tag">
            The Outcome-Driven Angle
          </p>

          <h2 className="outcome-title">
            <span>Arogya AI</span> to deliver faster care & better outcomes.
          </h2>

        </div>

        <div className="outcome-cards">

          {/* CARD 1 */}
          <div className="outcome-row">
            <div className="outcome-text">
              <h3>The encounter starts before the patient arrives.</h3>
              <p>
                AI Intake manages appointment confirmations, captures patient history, analyses vitals trends and flags chronic conditions so the clinician walks in already informed.
              </p>
            </div>
            <div className="image-box">
              <img src={Product1} alt="Product1" />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="outcome-row">
            <div className="outcome-text">
              <h3>Every word captured. Every field complete.</h3>
              <p>
                AI Scribe listens to the consultation in real time and converts it into structured clinical notes automatically — History of Present Illness, Review of Systems, Physical Exam — without the doctor touching a keyboard.

              </p>
            </div>
            <div className="image-box light">
              <img src={Product2} alt="Product2" />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="outcome-row">
            <div className="outcome-text">
              <h3>The right diagnosis. Surfaced faster.</h3>
              <p>
               AI Diagnostics synthesises symptoms, history, lab results and live notes into ranked differential diagnoses with confidence scores, red-flag alerts and suggested investigations delivered at the point of care.

              </p>
            </div>
            <div className="image-box light">
              <img src={Product3} alt="Product3" />
            </div>
          </div>

          {/* CARD 4 */}
          <div className="outcome-row">
            <div className="outcome-text">
              <h3>Scans read. Findings highlighted. Reports ready.</h3>
              <p>
                AI Radiology retrieves CT and MRI studies the moment they're available, segments organs using deep learning, detects abnormalities and generates structured reports for physician review in a fraction of the time.

              </p>
            </div>
            <div className="image-box light">
              <img src={Product4} alt="Product4" />
            </div>
          </div>

          {/* CARD 5 */}
          <div className="outcome-row">
            <div className="outcome-text">
              <h3>Safer prescribing. At the moment of decision.</h3>
              <p>
                AI Medication analyses the live consultation transcript for drug interactions, flags dosage concerns, surfaces antibiotic resistance alerts and connects directly to pharmacy systems for post-approval ordering.
              </p>
            </div>
            <div className="image-box light">
              <img src={Product5} alt="Product5" />
            </div>
          </div>

          {/* CARD 6 */}
          <div className="outcome-row">
            <div className="outcome-text">
              <h3>The loop closed. Nothing left outstanding. </h3>
              <p>
                AI Care Coordinator handles clinical coding from consultation notes, sends medication adherence check-ins, follows up on outstanding lab and imaging orders and schedules necessary follow-ups automatically.

              </p>
            </div>
            <div className="image-box light">
              <img src={Product6} alt="Product6" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}