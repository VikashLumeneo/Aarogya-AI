import "./WhatAxionicDoes.css";

function WhatAxionicDoes() {

  const steps = [
    {
      step: "Step 1",
      title: "Activate",
      desc: "One tap on any device phone, tablet, or PC. AI Scribe begins listening the moment the consultation starts."
    },
    {
      step: "Step 2",
      title: "Listen",
      desc: "The system captures every word of the doctor-patient conversation in real time in English or regional Indian languages."
    },
    {
      step: "Step 3",
      title: "Structure",
      desc: "AI Scribe automatically maps the conversation to clinical fields: History of Present Illness, Review of Systems, Physical Exam, Medications, Allergies."
    },
    {
      step: "Step 4",
      title: "Deliver",
      desc: "A complete, structured clinical note is ready for physician review the moment the consultation ends. One tap to approve and it enters the EHR."
    }
  ];

  return (

    <section className="works">

      <div className="works-container">

        <div className="works-header">

          <div className="works-tag">
            How It Works
          </div>

          <h2>
            From first word to final note
          </h2>

          <p>
            AI Scribe works silently in the background no training, no setup,
            no workflow change required.
          </p>

        </div>


        <div className="works-cards">

          {steps.map((item, index) => (

            <div key={index} className="works-card">

              <span className="step">
                {item.step}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default WhatAxionicDoes;