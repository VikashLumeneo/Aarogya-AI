import "./WhatAxionicDoes.css";

function WhatAxionicDoes() {

  const steps = [
    {
      number: "1",
      title: "Scan Ready",
      desc: "Auto-triggered on scan availability"
    },
    {
      number: "2",
      title: "Auto-Retrieve",
      desc: "DICOM pulled directly from PACS"
    },
    {
      number: "3",
      title: "Analyse",
      desc: "Deep learning organ segmentation"
    },
    {
      number: "4",
      title: "Highlight",
      desc: "Lesions overlaid on scan"
    },
    {
      number: "5",
      title: "Report",
      desc: "Structured report ready to approve"
    }
  ];

  return (

    <section className="works">

      <div className="works-container">

        {/* LEFT SIDE */}

        <div className="works-left">

          <div className="works-tag">
            How It Works
          </div>

          <h2>
            From scan acquisition <br />
            to structured report.
          </h2>

          <p>
            AI Radiologist works automatically from the moment imaging
            studies arrive in your PACS no manual uploads, no workflow
            change, no waiting.
          </p>

        </div>


        {/* RIGHT SIDE STEPS */}

        <div className="works-right">

          {steps.map((item, index) => (

            <div key={index} className="step-item">

              <div className={`step-number ${index === 0 ? "active" : ""}`}>
                {item.number}
              </div>

              <div className="step-content">

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default WhatAxionicDoes;