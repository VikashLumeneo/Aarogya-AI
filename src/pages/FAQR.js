import "./FAQR.css";
import { useState } from "react";

function FAQR() {

  const [active, setActive] = useState(0);

  const faqs = [
    {
      question: "Does AI Radiologist replace radiologists?",
      answer:
        "No. AI Radiologist is a clinical decision support tool. Every finding, every report, and every diagnostic suggestion requires explicit radiologist review and authorisation before it enters the patient record. The radiologist is always in control.",
    },
    {
      question: "Which imaging modalities are currently supported?",
      answer:
        "AI Radiologist supports multiple imaging modalities including CT, MRI, X-ray and other diagnostic scans depending on deployment configuration.",
    },
    {
      question: "How does it integrate with our existing PACS?",
      answer:
        "The system integrates directly with existing PACS infrastructure using standard DICOM workflows ensuring minimal workflow disruption.",
    },
    {
      question: "What body regions and findings can it detect?",
      answer:
        "It can analyse multiple anatomical regions and detect various clinical findings depending on trained diagnostic modules.",
    },
    {
      question: "How accurate is the AI detection?",
      answer:
        "The system is trained on large clinical datasets and continuously validated to maintain high diagnostic accuracy.",
    },
    {
      question: "Does it work with existing radiology reporting systems?",
      answer:
        "Yes. It integrates with existing reporting systems and clinical workflows to support radiologists without replacing them.",
    },
  ];

  return (
    <section className="faqr">

      <div className="faqr-container">

        {/* LEFT CONTENT */}

        <div className="faqr-left">

          <button className="faqr-tag">FAQ</button>

          <h2 className="faqr-title">
            Frequently asked questions
          </h2>

          <p className="faqr-desc">
            Everything you need to know about AI Radiologist before talking to our team.
          </p>

        </div>

        {/* RIGHT ACCORDION */}

        <div className="faqr-right">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faqr-item ${active === index ? "active" : ""}`}
              onClick={() => setActive(active === index ? null : index)}
            >
              <div className="faqr-question">

                <p>{faq.question}</p>

                <span className="faqr-icon">
                  {active === index ? "▲" : "▼"}
                </span>

              </div>

              {active === index && (
                <p className="faqr-answer">
                  {faq.answer}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQR;