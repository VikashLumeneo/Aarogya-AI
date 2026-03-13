import React from "react";
import "./About.css";

import consultIcon from "../assets/images/Consultation Intelligence.svg";
import diagnosisIcon from "../assets/images/AI-Assisted Diagnosis.svg";
import radiologyIcon from "../assets/images/Radiology AI.svg";
import careIcon from "../assets/images/Full Care Continuum.svg";
import safetyIcon from "../assets/images/Safety & Trust.svg";

export default function About() {
  return (
    <section className="about">

      <div className="about-container">

        {/* TOP SECTION */}

        <div className="about-top">

          <div className="about-left">
            <h1>It listens.</h1>
            <h1>It understands.</h1>
            <h1 className="highlight">It assists.</h1>
          </div>

          <div className="about-right">
            <p>
              Arogya AI works alongside doctors at every stage of care from
              patient conversations to radiology analysis. One platform.
              End-to-end clinical intelligence.
            </p>
          </div>

        </div>


        {/* BOTTOM SECTION */}

        <div className="about-bottom">

          {/* LEFT FEATURES */}

          <div className="features">

            <div className="feature-item">
              <img src={consultIcon} alt="" />
              <span>Consultation Intelligence</span>
            </div>

            <div className="feature-item">
              <img src={diagnosisIcon} alt="" />
              <span>AI-Assisted Diagnosis</span>
            </div>

            <div className="feature-item active">
              <img src={radiologyIcon} alt="" />
              <span>Radiology AI</span>
            </div>

            <div className="feature-item">
              <img src={careIcon} alt="" />
              <span>Full Care Continuum</span>
            </div>

            <div className="feature-item">
              <img src={safetyIcon} alt="" />
              <span>Safety & Trust</span>
            </div>

          </div>


          {/* RIGHT DETAILS */}

          <div className="details">

            <p className="tag">Radiology AI</p>

            <h2>Scans analysed. Findings highlighted.</h2>

            <p className="small">
              CT and MRI interpretation at a fraction of the time.
            </p>

            <p>
              <b>Automatic DICOM Retrieval</b> Arogya AI integrates directly
              with PACS systems and retrieves imaging studies the moment
              they’re available — no manual download, no waiting.
            </p>

            <p>
              <b>Deep Learning Organ Segmentation</b> Organs are segmented
              and abnormalities are detected using models trained on
              clinical imaging datasets.
            </p>

            <p>
              <b>Structured Radiology Reports</b> Reports are auto-generated
              in physician-reviewable format, reducing interpretation time.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}