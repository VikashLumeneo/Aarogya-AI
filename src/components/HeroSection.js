import React from "react";
import "./HeroSection.css";
import heroBg from "../assets/images/Herobg.svg";
import HeroAI from "../assets/images/Hero.svg";

export default function HeroSection() {
  return (
    <div className="hero-section">

      <img
        src={heroBg}
        alt="hero background"
        className="heroBg"
      />

      <div className="hero-container">

        <button className="hero-tag">
          Clinical intelligence platform
        </button>

        <h1 className="hero-title">
           Medicine. Meet <span>Intelligence</span>
        </h1>

        <p className="hero-description">
          From the moment a consultation begins to the final radiology report,
          Arogya AI is present reducing the cognitive load on doctors and the
          administrative burden on care teams.<br /> <span>Real-time. Accurate. Invisible until you need it.</span>
          
        </p>

        <div className="hero-buttons">

          <button className="hero-demo-btn">
            Request a demo
          </button>

          <button className="hero-action-btn">
            See it in action →
          </button>

        </div>

      </div>
      

    </div>
    
  );
}