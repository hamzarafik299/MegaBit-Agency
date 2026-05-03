import "./services.css";
import { useEffect, useRef, useState } from "react";
import { createObserver } from "../../animation/Observator";
import Carousel from "../carasouls/Carousel.jsx";

export default function Services() {
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = createObserver((entry, visible) => {
      setIsVisible(visible);
    });

    const elements = [headerRef.current].filter(Boolean);
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section className="landing-services" id="services">
      <div
        className={
          isVisible
            ? "landing-services__container show"
            : "landing-services__container"
        }
      >
        <div
          ref={headerRef}
          className={
            isVisible
              ? "landing-services__header show"
              : "landing-services__header"
          }
        >
          <h1 className="btn-shine">Services</h1>
        </div>

        <div className="landing-services__body">
          <h3>Services Digitaux sur Mesure pour Vous</h3>
          <Carousel />
        </div>
      </div>
    </section>
  );
}
