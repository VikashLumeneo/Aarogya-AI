import "./AiSLast.css";
import demoIcon from "../assets/images/demo.svg";

function AiSLast() {
  return (
    <section className="ais-last">

      <div className="ais-last-container">

        <h2 className="ais-last-title">
          Give your doctors their time back.
        </h2>

        <p className="ais-last-desc">
          Documentation shouldn't take hours. With AI Scribe, every
          consultation ends with a complete clinical note - ready to review,
          ready to submit.
        </p>

        <button className="ais-last-btn">
          Request a demo
          <img src={demoIcon} alt="icon" />
        </button>

      </div>

    </section>
  );
}

export default AiSLast;