import "./AiScribe.css";

import bg from "../assets/images/Herobg.svg";
import demoIcon from "../assets/images/demo.svg";
import graphic from "../assets/images/AiSHome.svg";

import WhatAxionicDoes from "./WhatAxionicDoes";
import Core from "./Core";
import Safety from "./Safety";
import AiScribeFAQ from "./AiScribeFAQ";
import AiSLast from "./AiSLast";
import Footer from "../components/Footer";
import ImpactStats from "./ImpactStats";

function AiScribe() {

  return (
    <>

      {/* HERO */}

      <section className="hero">

        <img src={bg} className="hero-bg" alt="bg"/>

        <div className="hero-wrapper">

          {/* LEFT */}

          <div className="hero-left">

            <p className="breadcrumb">
              Arogya AI / Product / <span>AI Scribe</span>
            </p>

            <div className="hero-tag">
              AI Agents · Arogya AI
            </div>

            <h1 className="hero-title">
              Stop typing. <br/> Start listening.
            </h1>

            <p className="hero-desc">
              Documentation happens automatically while you focus on the patient.
            </p>

            <div className="hero-buttons">

              <button className="demo-btn">
                Request a demo
                <img src={demoIcon} alt="icon"/>
              </button>

              <button className="action-btn">
                See it in action →
              </button>

            </div>

          </div>


          {/* RIGHT */}

          <div className="hero-right">

            <img
              src={graphic}
              alt="AI Scribe"
            />

          </div>

        </div>

      </section>

      <ImpactStats/>
      <WhatAxionicDoes/>
      <Core/>
      <Safety/>
      <AiScribeFAQ/>
      <AiSLast/>
      <Footer/>

    </>
  );
}

export default AiScribe;