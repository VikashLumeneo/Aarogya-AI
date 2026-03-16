import { useEffect, useRef } from "react";
import "./Outcome.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Outcome() {

  const sectionRef = useRef();

  useEffect(() => {

    const rows = gsap.utils.toArray(".outcome-row");

    function setActive(index) {
      rows.forEach((row, i) => {
        if (i === index) {
          row.classList.add("active");
        } else {
          row.classList.remove("active");
        }
      });
    }

    rows.forEach((row, i) => {

      ScrollTrigger.create({
        trigger: row,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i)
      });

    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=" + rows.length * 100 + "%",
      pin: true,
      scrub: true
    });

  }, []);

  return (

    <section className="outcome" ref={sectionRef}>

      <div className="outcome-container">

        <div className="outcome-header">

          <button className="outcome-tag">
            The Outcome-Driven Angle
          </button>

          <h2 className="outcome-title">
            Arogya AI to deliver faster care & better outcomes.
          </h2>

        </div>


        {/* Slide 1 */}

        <div className="outcome-row active">

          <div className="outcome-text">

            <h3>The encounter starts before the patient arrives.</h3>

            <p>
              AI Intake manages appointment confirmations, captures patient history,
              analyses vitals trends and flags chronic conditions so the clinician walks in already informed.
            </p>

          </div>

          <div className="outcome-image">
            <div className="image-box">Product Photo</div>
          </div>

        </div>


        {/* Slide 2 */}

        <div className="outcome-row">

          <div className="outcome-text">

            <h3>Every word captured. Every field complete.</h3>

            <p>
              AI Scribe listens to the consultation in real time and converts it into structured clinical notes automatically.
            </p>

          </div>

          <div className="outcome-image">
            <div className="image-box light">Product Photo</div>
          </div>

        </div>


        {/* Slide 3 */}

        <div className="outcome-row">

          <div className="outcome-text">

            <h3>The right diagnosis. Surfaced faster.</h3>

            <p>
              AI Diagnostics synthesises symptoms, history, lab results and live notes into ranked differential diagnoses.
            </p>

          </div>

          <div className="outcome-image">
            <div className="image-box light">Product Photo</div>
          </div>

        </div>


        {/* Slide 4 */}

        <div className="outcome-row">

          <div className="outcome-text">

            <h3>Scans read. Findings highlighted. Reports ready.</h3>

            <p>
              AI Radiology retrieves CT and MRI studies and generates structured reports.
            </p>

          </div>

          <div className="outcome-image">
            <div className="image-box light">Product Photo</div>
          </div>

        </div>


        {/* Slide 5 */}

        <div className="outcome-row">

          <div className="outcome-text">

            <h3>Safer prescribing. At the moment of decision.</h3>

            <p>
              AI Medication analyses consultation transcripts for drug interactions and dosage concerns.
            </p>

          </div>

          <div className="outcome-image">
            <div className="image-box light">Product Photo</div>
          </div>

        </div>


        {/* Slide 6 */}

        <div className="outcome-row">

          <div className="outcome-text">

            <h3>The loop closed. Nothing left outstanding.</h3>

            <p>
              AI Care Coordinator handles coding, medication adherence check-ins and schedules follow-ups automatically.
            </p>

          </div>

          <div className="outcome-image">
            <div className="image-box light">Product Photo</div>
          </div>

        </div>

      </div>

    </section>

  );
}