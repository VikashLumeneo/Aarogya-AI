import "./AiRadiologist.css";
import bg from "../assets/images/Herobg.svg";
import demoIcon from "../assets/images/demo.svg";

import AiR1 from "../assets/images/AiR1.svg";
import AiR2 from "../assets/images/AiR2.svg";
import AiR3 from "../assets/images/AiR3.svg";

import Cards from "./Cards";
import CoreCapabilities from "./CoreCapabilities";
import Trust from "./Trust";
import FAQR from "./FAQR";
import AiRLast from "./AiRLast";
// import Safety from "./Safety";
// import AiSLast from "./AiSLast";
import Footer from "../components/Footer";

function AiRadiologist() {

  return (

    <>

    {/* HERO SECTION */}

    <section className="ai-radiologist">

      <img
        src={bg}
        className="hero-bg"
        alt="background"
      />

      <div className="hero-content">

        <p className="breadcrumb">
          Arogya AI / Product / <span>AI Radiologist</span>
        </p>

        <div className="hero-text">

          <div className="hero-tag">
            AI Agents · Arogya AI
          </div>

          <h1 className="hero-title">
            Scans read. Findings found.
          </h1>

          <p className="hero-desc">
            AI-powered radiology analysis that detects what matters,
            exactly when it matters.
          </p>

          <div className="hero-buttons">

            <button className="demo-btn">

              Request a demo

              <img
                src={demoIcon}
                alt="demo icon"
                className="demo-icon"
              />

            </button>

            <button className="action-btn">
              See it in action →
            </button>

          </div>

        </div>

      </div>

    </section>



    {/* IMPACT STATISTICS */}

    <section className="impact">

      <h2 className="impact-heading">
        3 Impact statistics
      </h2>

      <div className="impact-cards">


        <div className="impact-card">

          <img src={AiR1} alt="icon" className="impact-icon" />

          <h3>60–70%</h3>

          <p>
            Reduction in average scan interpretation time
          </p>

        </div>



        <div className="impact-card">

          <img src={AiR2} alt="icon" className="impact-icon" />

          <h3>CT & MRI</h3>

          <p>
            Imaging modalities supported natively
          </p>

        </div>



        <div className="impact-card">

          <img src={AiR3} alt="icon" className="impact-icon" />

          <h3>&lt;1 in 100K</h3>

          <p>
            Hallucination rate via adversarial AI audit
          </p>

        </div>


      </div>

    </section>

<Cards />
<CoreCapabilities />
<Trust />
<FAQR />
<AiRLast />
{/* <WhatAxionicDoes /> */}
{/* <Core /> */}
{/* <Safety /> */}
{/* <AiSLast /> */}
<Footer />

    </>
  );

}

export default AiRadiologist;