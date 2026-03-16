import React from "react";
import "./FeatureCircle.css";
import heroCircle from "../assets/images/Hero1.svg";

export default function FeatureCircle() {
  return (
    <div className="feature-circle">

      {/* circle image */}
      <img
        src={heroCircle}
        alt="Arogya AI Features"
        className="feature-img"
      />

      {/* trusted text */}
      <p className="trusted-text">
        Trusted by leading hospitals and health systems across India
      </p>

    </div>
  );
}