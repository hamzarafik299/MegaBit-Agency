import "./services.css";
import { useEffect, useRef, useState } from "react";
import { createObserver } from "../../animation/Observator";
import Carousel from "../carasouls/Carousel.jsx";

export default function Services() {
  const headerRef = useRef(null);
  const footerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = createObserver((entry, isVisible) => {
      setIsVisible(isVisible);
    });

    const elements = [headerRef.current, footerRef.current].filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="services" id="services">
      <div className={isVisible ? "services-container show" : "services-container"}>

        {/* HEADER */}
        <div
          ref={headerRef}
          className={isVisible ? "servicesHeader show" : "servicesHeader"}
        >
          <h1 className="btn-shine">Services</h1>
        </div>

        {/* CONTENT */}
        <div className="servicesDes">
          <h3>Services Digitaux sur Mesure pour Vous</h3>
          <Carousel />
        </div>

        {/* FOOTER */}
        <div
          ref={footerRef}
          className={isVisible ? "servicesFooter show" : "servicesFooter"}
        >
          {/* <div className="servicesFooter-container">
            <p>
              Let’s grow your business together{" "}
              <a href="#contact">Get a Free Quote</a>
            </p>
          </div> */}
        </div>

      </div>
    </div>
  );
}