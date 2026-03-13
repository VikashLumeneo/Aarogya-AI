import { useState } from "react";
import "./AiScribeFAQ.css";

export default function AiScribeFAQ() {

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Does AI Scribe replace the doctor's notes entirely?",
      a: "No. AI Scribe generates a draft note for physician review. Every note requires explicit clinician review and approval before it enters the patient record. The doctor is always in control."
    },
    {
      q: "Does it work across specialties?",
      a: "Yes. AI Scribe adapts across multiple clinical specialties including general practice, cardiology, dermatology and more."
    },
    {
      q: "Which languages are supported?",
      a: "AI Scribe supports multiple languages and dialects for accurate transcription."
    },
    {
      q: "How does it handle patient privacy?",
      a: "All data is encrypted and processed securely following healthcare compliance standards."
    },
    {
      q: "Does it integrate with our existing EHR?",
      a: "Yes. AI Scribe integrates with major EHR systems to streamline documentation."
    },
    {
      q: "How long does setup take?",
      a: "Setup is quick and usually completed within a few days depending on integration requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">

      <div className="faq-container">

        {/* LEFT SIDE */}

        <div className="faq-left">

          <div className="faq-tag">FAQ</div>

          <h2 className="faq-title">
            Frequently asked questions
          </h2>

          <p className="faq-desc">
            Everything you need to know before talking to our team about Arogya AI.
          </p>

        </div>


        {/* RIGHT SIDE */}

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