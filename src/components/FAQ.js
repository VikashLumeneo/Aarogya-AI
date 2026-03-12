import React, { useState } from "react";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is Arogya AI replacing doctors?",
      answer:
        "No. Arogya AI is a clinical decision support tool. Every diagnosis and treatment decision remains with the physician. AI proposes clinicians authorise."
    },
    {
      question: "What languages are supported?",
      answer:
        "Arogya AI supports multiple languages including English and regional languages for better accessibility."
    },
    {
      question: "Does it integrate with hospital systems?",
      answer:
        "Yes, Arogya AI integrates with existing hospital management systems and EHR platforms."
    },
    {
      question: "What imaging types does it support?",
      answer:
        "It supports various medical imaging formats including X-ray, MRI and CT scans."
    },
    {
      question: "How does Arogya AI handle patient data?",
      answer:
        "Patient data is securely encrypted and handled according to healthcare data protection standards."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* LEFT SIDE */}
        <div className="faq-left">
          <span className="faq-tag">FAQ</span>

          <h2 className="faq-title">
            Frequently Asked <br /> Questions
          </h2>

          <p className="faq-desc">
            Everything you need to know before talking to our team about
            Arogya AI.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="faq-icon">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {openIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}