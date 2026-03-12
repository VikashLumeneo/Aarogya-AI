import React from "react";
import "./KeyBenefits.css";

import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";
import icon4 from "../assets/images/icon4.svg";
import icon5 from "../assets/images/icon5.svg";
import icon6 from "../assets/images/icon6.svg";

function KeyBenefits() {
  return (
    <section className="key-benefits">

      <div className="benefits-container">

        <div className="benefits-header">
          <h2>Key Benefits</h2>

          <p>
            Better outcomes for patients. Better workflows for doctors.
            Arogya AI is designed to integrate seamlessly with hospital
            systems and existing clinical infrastructure without disrupting
            how your teams already work.
          </p>
        </div>

        <div className="benefits-grid">

          <div className="benefit-card">
            <img src={icon1} alt="icon"/>
            <h3>Better Diagnostic Confidence</h3>
            <p>
              AI-generated differential diagnoses & radiology analysis help
              doctors detect conditions earlier and reduce missed findings.
            </p>
          </div>

          <div className="benefit-card middle">
            <img src={icon2} alt="icon"/>
            <h3>Multilingual <br/> Healthcare</h3>
            <p>
              Supports consultations in English and regional Indian languages
              making healthcare accessible to more patients.
            </p>
          </div>

          <div className="benefit-card">
            <img src={icon3} alt="icon"/>
            <h3>Consistent <br/>Clinical Quality</h3>
            <p>
              Standardised analysis and documentation improve consistency
              across clinicians, hospitals and care teams.
            </p>
          </div>

          <div className="benefit-card top">
            <img src={icon4} alt="icon"/>
            <h3>Faster Clinical Documentation</h3>
            <p>
              Automated transcription and structured note generation eliminate
              hours of manual documentation for every clinician.
            </p>
          </div>

          <div className="benefit-card middle top">
            <img src={icon5} alt="icon"/>
            <h3>Faster Radiology Interpretation</h3>
            <p>
              Automated lesion detection and structured reporting accelerate
              scan review and diagnosis significantly.
            </p>
          </div>

          <div className="benefit-card top">
            <img src={icon6} alt="icon"/>
            <h3>EHR / PACS <br/>Integration</h3>
            <p>
              Works with EHR/HIMS and PACS radiology systems. No workflow
              change required. Arogya AI fits into how your team already works.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default KeyBenefits;