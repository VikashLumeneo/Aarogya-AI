import "./Cards.css";

export default function Cards() {
  const steps = [
    {
      title: "Scan Ready",
      text: "Auto-triggered on scan availability"
    },
    {
      title: "Auto-Retrieve",
      text: "DICOM pulled directly from PACS"
    },
    {
      title: "Analyse",
      text: "Deep learning organ segmentation"
    },
    {
      title: "Highlight",
      text: "Lesions overlaid on scan"
    },
    {
      title: "Report",
      text: "Structured report ready to approve"
    }
  ];

  return (
    <section className="cards">

      <div className="cards-wrapper">

        {/* LEFT */}
        <div className="cards-left">

          <button className="cards-tag">
            How It Works
          </button>

          <h2 className="cards-title">
            From scan acquisition <br/>
            to structured report.
          </h2>

          <p className="cards-subtitle">
            AI Radiologist works automatically from the moment imaging
            studies arrive in your PACS no manual uploads, no workflow
            change, no waiting.
          </p>

        </div>


        {/* RIGHT */}
        <div className="steps">

          {steps.map((step, index) => (
            <div className="step-item" key={index}>

              <div className="step-number">
                {index + 1}
              </div>

              <div className="step-text">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}