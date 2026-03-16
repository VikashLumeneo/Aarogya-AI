import "./AiRLast.css";
import demoIcon from "../assets/images/demo.svg";

function AiRLast() {
  return (
    <section className="airlast">

      <div className="airlast-container">

        <div className="airlast-text">

          <h2 className="airlast-title">
            The future of clinical intelligence is here
          </h2>

          <p className="airlast-desc">
            Doctors should spend their time on patients not documentation,
            not scan queues, not paperwork.
          </p>

        </div>

        <button className="airlast-btn">
          Request a demo
          <img src={demoIcon} alt="demo" className="airlast-icon" />
        </button>

      </div>

    </section>
  );
}

export default AiRLast;