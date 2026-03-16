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

  const features = [
    { id: "01", icon: Vector1, title: "Ambient consultation capture", sub: "(was: Real-Time Transcription)" },
    { id: "02", icon: Vector2, title: "Symptom & history extraction", sub: "(was: symptom intelligence)" },
    { id: "03", icon: Vector3, title: "Differential diagnosis engine", sub: "(was: differential diagnosis)" },
    { id: "04", icon: Vector4, title: "Automated scan retrieval", sub: "(was: DICOM integration)" },
    { id: "05", icon: Vector5, title: "Abnormality detection", sub: "(was: lesion detection)" },
    { id: "06", icon: Vector6, title: "Structured report generation", sub: "(was: report generation)" },
    { id: "07", icon: Vector7, title: "Multilingual consultation support", sub: "(was: multilingual support)" },
    { id: "08", icon: Vector8, title: "Care gap & coding intelligence", sub: "(was: clinical analytics)" },
  ];

  return (
    <section className="problem-strip">

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

          {features.map((item, index) => (
            <div className="feature-card" key={index}>

              <div className="feature-number">{item.id}</div>

              <img
                src={item.icon}
                className="feature-icon"
                alt="feature icon"
              />

              <div className="feature-text">

                <span className="feature-title">
                  {item.title}
                </span>

                <span className="feature-sub">
                  {item.sub}
                </span>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}