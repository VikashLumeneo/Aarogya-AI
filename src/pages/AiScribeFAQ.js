import { useState } from "react";
import "./AiScribeFAQ.css";

export default function AiScribeFAQ() {

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Does AI Scribe replace the doctor’s notes entirely?",
      a: "No. AI Scribe generates a draft note for physician review. Every note requires explicit clinician review and approval before it enters the patient record."
    },
    {
      q: "Does it work across specialties?",
      a: "Yes. AI Scribe adapts across multiple clinical specialties."
    },
    {
      q: "Which languages are supported?",
      a: "AI Scribe supports multiple languages and dialects."
    },
    {
      q: "How does it handle patient privacy?",
      a: "All patient data is encrypted and processed securely."
    },
    {
      q: "Does it integrate with our existing EHR?",
      a: "Yes. AI Scribe integrates with major EHR systems."
    },
    {
      q: "How long does setup take?",
      a: "Setup usually takes only a few days."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">

      <div className="faq-container">

        {/* LEFT */}

        <div className="faq-left">

          <div className="faq-tag">
            QUESTIONS
          </div>

          <h2 className="faq-title">
            The Details.
          </h2>

          <p className="faq-desc">
            Everything you need to know about AI Scribe before talking to our team.
          </p>

        </div>


        {/* RIGHT */}

        <div className="faq-right">

          {faqs.map((item, index) => (

            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >

              <div className="faq-question">

                <span>{item.q}</span>

                <span className="faq-icon">
                  {openIndex === index ? "▲" : "▼"}
                </span>

              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  {item.a}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}