import { useState } from "react";
import { FAQ_ITEMS } from "./faq-data";
import "./FAQ.css";

/* ============================
   COMPONENT
   ============================ */

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container">
        <h2>Preguntas frecuentes</h2>

        <div className="faq-list">
          {FAQ_ITEMS.map(({ question, answer }, index) => (
            <div
              key={question}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                {question}
                <span className="faq-icon">+</span>
              </button>

              <div className="faq-answer">
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
