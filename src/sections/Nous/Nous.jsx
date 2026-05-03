import { motion } from "framer-motion";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import "./Nous.css";

const images = [blog1, blog2, blog3];

const reasons = [
  {
    number: "01",
    title: "Approche sur mesure",
    description:
      "Chaque projet est adapt\u00E9 \u00E0 vos besoins pour garantir des r\u00E9sultats efficaces et durables.",
  },
  {
    number: "02",
    title: "\u00C9quipe exp\u00E9riment\u00E9e",
    description:
      "Une \u00E9quipe qualifi\u00E9e qui ma\u00EEtrise les outils et les strat\u00E9gies digitales modernes.",
  },
  {
    number: "03",
    title: "D\u00E9cisions bas\u00E9es sur la data",
    description:
      "Nous analysons les donn\u00E9es pour optimiser vos performances et maximiser votre retour.",
  },
  {
    number: "04",
    title: "Accompagnement continu",
    description:
      "Nous vous accompagnons \u00E0 chaque \u00E9tape pour assurer la r\u00E9ussite de votre projet.",
  },
];

const revealProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Nous() {
  const loopedImages = [...images, ...images];

  return (
    <div className="nous">
      <motion.div className="nous-container" {...revealProps}>
        <h1 className="btn-shine">Pourquoi nous</h1>
        <h2 className="nousH">
          {"Pourquoi les entreprises font confiance \u00E0 notre "}
          <span>expertise</span>
        </h2>

        <div className="nous body">
          <div className="scroll-box">
            <div className="scroll-track">
              {loopedImages.map((src, index) => (
                <img key={`${src}-${index}`} src={src} alt={`img-${index}`} />
              ))}
            </div>
          </div>

          <div className="grid">
            {reasons.map((reason) => (
              <div key={reason.number} className="Ncard">
                <h1>{reason.number}</h1>
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
