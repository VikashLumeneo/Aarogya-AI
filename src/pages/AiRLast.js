import "./AiRLast.css";
import demoIcon from "../assets/images/demo.svg";

function AiRLast() {
  return (
    <section className="airlast">

      <div className="airlast-container">

        <div className="airlast-text">

          <h2 className="airlast-title">
            Cut interpretation time. Miss nothing.
          </h2>

          <p className="airlast-desc">
            Radiology scan queues shouldn't be a bottleneck in patient care.
            With AI Radiologist, every study is analysed automatically,
            findings highlighted, reports drafted, and urgent cases surfaced
            before the radiologist opens the viewer.
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