import "./WhatAxionicDoes.css";

function WhatAxionicDoes() {

  const steps = [
    {
      number: "1",
      title: "Active",
      desc: "One tap, any device"
    },
    {
      number: "2",
      title: "Listen",
      desc: "Real-time capture"
    },
    {
      number: "3",
      title: "Structure",
      desc: "Maps to clinical fields"
    },
    {
      number: "4",
      title: "Deliver",
      desc: "Note ready to approve"
    }
  ];

  return (

    <section className="works">

      <div className="works-container">

        {/* HEADER */}

        <div className="works-header">

          <div className="works-tag">
            How It Works
          </div>

          <h2>
            From first word to final note.
          </h2>

          <p>
            AI Scribe works silently no training, no setup,
            no workflow change required.
          </p>

        </div>


        {/* STEPS */}

        <div className="works-steps">

          {steps.map((item, index) => (

            <div key={index} className="step">

              <div className="step-circle">
                {item.number}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default WhatAxionicDoes;