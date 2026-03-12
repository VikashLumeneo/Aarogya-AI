import React from "react";
import "./Feature.css";

import Vector1 from "../assets/images/Vector1.svg";
import Vector2 from "../assets/images/Vector2.svg";
import Vector3 from "../assets/images/Vector3.svg";
import Vector4 from "../assets/images/Vector4.svg";
import Vector5 from "../assets/images/Vector5.svg";
import Vector6 from "../assets/images/Vector6.svg";
import Vector7 from "../assets/images/Vector7.svg";
import Vector8 from "../assets/images/Vector8.svg";

export default function Feature() {
  return (
    <div className="problem-strip">
      <div className="frame">

        <div className="your-entire-wrapper">
          <p className="your-entire">
            <span className="text-wrapper">
              Your entire healthcare organization <br />
              can run on the intelligence of
            </span>
            <span className="span"> ArogyaAI.</span>
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-number">01</div>
            <img src={Vector1} className="feature-icon" alt="" />
            <div className="feature-text">Real-Time Transcription</div>
          </div>

          <div className="feature-card">
            <div className="feature-number">02</div>
            <img src={Vector2} className="feature-icon" alt="" />
            <div className="feature-text">Symptom Intelligence</div>
          </div>

          <div className="feature-card">
            <div className="feature-number">03</div>
            <img src={Vector3} className="feature-icon" alt="" />
            <div className="feature-text">Differential Diagnosis</div>
          </div>

          <div className="feature-card">
            <div className="feature-number">04</div>
            <img src={Vector4} className="feature-icon" alt="" />
            <div className="feature-text">DICOM Integration</div>
          </div>

          <div className="feature-card">
            <div className="feature-number">05</div>
            <img src={Vector5} className="feature-icon" alt="" />
            <div className="feature-text">Lesion Detection</div>
          </div>

          <div className="feature-card">
            <div className="feature-number">06</div>
            <img src={Vector6} className="feature-icon" alt="" />
            <div className="feature-text">Report Generation</div>
          </div>

          <div className="feature-card">
            <div className="feature-number">07</div>
            <img src={Vector7} className="feature-icon" alt="" />
            <div className="feature-text">Multilingual Support</div>
          </div>

          <div className="feature-card">
            <div className="feature-number">08</div>
            <img src={Vector8} className="feature-icon" alt="" />
            <div className="feature-text">Clinical Analytics</div>
          </div>

        </div>

      </div>
    </div>
  );
}