import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./faqs.css";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Pourquoi une marque doit-elle être présente sur les réseaux sociaux ?",
      answer:
        "Pour augmenter sa visibilité et toucher un large public. Cela permet aussi de créer une relation directe et continue avec ses clients."
    },
    {
      question: "Pourquoi une marque a besoin du marketing digital ?",
      answer:
        "Parce qu’il permet de toucher un large public, de promouvoir ses produits efficacement, d’interagir avec les clients et d’augmenter ses ventes à moindre coût."
    },
    {
      question: "Pourquoi interagir avec son audience est important ?",
      answer:
        "Cela montre que la marque est à l’écoute et renforce la confiance. Une bonne interaction favorise la fidélité et l’engagement."
    },
    {
      question: "Comment les réseaux sociaux aident-ils à attirer des clients ?",
      answer:
        "En publiant du contenu intéressant qui capte l’attention et suscite l’intérêt. L’engagement (likes, commentaires) aide à renforcer la confiance."
    }
  ];

  return (
    <div className="faqs-container" id="faqs">
      <div className="faqs-header">
        <h1 className="btn-shine">Faqs</h1>
      </div>

      <div className="faqs-body">
        {faqs.map((faq, index) => (
          <div className="faqs-qest" key={index}>
            <div className={openIndex === index ? "quest active-question" : "quest"}>
              <h1>{faq.question}</h1>

              <span
                className={`row ${openIndex === index ? "active" : ""}`}
                onClick={() => toggle(index)}
              >
                <IoIosArrowDown />
              </span>
            </div>

            <div
              className={`answer-wrapper ${
                openIndex === index ? "show" : ""
              }`}
            >
              <p className="answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}