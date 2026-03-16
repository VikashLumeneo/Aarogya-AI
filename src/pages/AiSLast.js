import "./AiSLast.css";
import demoIcon from "../assets/images/demo.svg";

export default function AiSLast() {
  return (
    <section className="ais-last">

      <div className="ais-last-container">

        <h2 className="ais-last-title">
          The future of clinical intelligence is here
        </h2>

        <p className="ais-last-desc">
          Doctors should spend their time on patients not documentation,
          not scan queues, not paperwork.
        </p>

        <button className="ais-last-btn">
          Request a demo
          <img src={demoIcon} alt="icon" />
        </button>

      </div>

    </section>
  );
}