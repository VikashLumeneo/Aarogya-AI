import "./AiRadiologist.css";

import bg from "../assets/images/Herobg.svg";
import demoIcon from "../assets/images/demo.svg";
import graphic from "../assets/images/Graphic.svg";

import Cards from "./Cards";
import CoreCapabilities from "./CoreCapabilities";
import Trust from "./Trust";
import FAQR from "./FAQR";
import AiRLast from "./AiRLast";
import Footer from "../components/Footer";

function AiRadiologist() {
  return (
    <>

      {/* HERO */}

      <section className="hero">

        <img src={bg} className="hero-bg" alt="bg"/>

        <div className="hero-wrapper">

          {/* LEFT */}

          <div className="hero-left">

            <p className="breadcrumb">
              Arogya AI / Product / <span>AI Radiologist</span>
            </p>

            <div className="hero-tag">
              AI Agents · Arogya AI
            </div>

            <h1 className="hero-title">
              See what others <br/><span>Miss.</span>
            </h1>

            <p className="hero-desc">
              Radiology intelligence. Delivered the moment the scan is ready.
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
              alt="AI Radiologist"
            />

          </div>

        </div>

      </section>



      {/* STATS */}

      <section className="stats">

        <h2>How we help <span>Radiologists</span></h2>

        <div className="stats-bar">

          <div className="stat">
            <h3>70%</h3>
            <p>Faster report turnaround vs. manual review</p>
          </div>

          <div className="stat">
            <h3>&lt;1 in 100K</h3>
            <p>Hallucination rate via adversarial AI audit</p>
          </div>

          <div className="stat">
            <h3>15+</h3>
            <p>organ systems supported for segmentation</p>
          </div>

        </div>

      </section>


      <Cards/>
      <CoreCapabilities/>
      <Trust/>
      <FAQR/>
      <AiRLast/>
      <Footer/>

    </>
  );
}

export default AiRadiologist;