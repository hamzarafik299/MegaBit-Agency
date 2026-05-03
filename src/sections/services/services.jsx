import "./services.css";
import { motion } from "framer-motion";
import Carousel from "../carasouls/Carousel.jsx";

const sectionReveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const headerReveal = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
};

export default function Services() {
  return (
    <section className="landing-services" id="services">
      <motion.div className="landing-services__container" {...sectionReveal}>
        <motion.div className="landing-services__header" {...headerReveal}>
          <h1 className="btn-shine">Services</h1>
        </motion.div>

        <div className="landing-services__body">
          <h3>Services Digitaux sur Mesure pour Vous</h3>
          <Carousel />
        </div>
      </motion.div>
    </section>
  );
}
