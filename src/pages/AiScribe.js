import "./AiScribe.css";
import bg from "../assets/images/Herobg.svg";
import demoIcon from "../assets/images/demo.svg";

import AiScribe1 from "../assets/images/AiScribe1.svg";
import AiScribe2 from "../assets/images/AiScribe2.svg";
import AiScribe3 from "../assets/images/AiScribe3.svg";
import WhatAxionicDoes from "./WhatAxionicDoes";
import Core from "./Core";
import Safety from "./Safety";
import AiScribeFAQ from "./AiScribeFAQ";
function AiScribe() {

  return (

    <>
    
    {/* HERO SECTION */}

    <section className="ai-scribe">

      <img
        src={bg}
        className="hero-bg"
        alt="background"
      />

      <div className="hero-content">

        <p className="breadcrumb">
          Arogya AI / Product / <span>AI Scribe</span>
        </p>

        <div className="hero-text">

          <div className="hero-tag">
            AI Agents · Arogya AI
          </div>

          <h1 className="hero-title">
            Stop typing. Start listening.
          </h1>

          <p className="hero-desc">
            Documentation happens automatically while you focus on the patient.
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

          <img src={AiScribe1} alt="icon" className="impact-icon" />

          <h3>2–3 hrs</h3>

          <p>
            Saved per doctor per day on documentation
          </p>

        </div>



        <div className="impact-card">

          <img src={AiScribe2} alt="icon" className="impact-icon" />

          <h3>&lt;1 in 100K</h3>

          <p>
            Hallucination rate via adversarial AI audit
          </p>

        </div>



        <div className="impact-card">

          <img src={AiScribe3} alt="icon" className="impact-icon" />

          <h3>10+</h3>

          <p>
            Indian languages supported natively
          </p>

        </div>


      </div>

    </section>
<WhatAxionicDoes />
<Core />
<Safety />
<AiScribeFAQ />
    </>
  );

}

export default AiScribe;