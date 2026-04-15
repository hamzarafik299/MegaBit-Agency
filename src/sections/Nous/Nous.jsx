import "./Nous.css";
import { createObserver } from "../../animation/Observator";
import { useEffect, useRef, useState } from "react";
export default function Nous() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = createObserver((entry, isVisible) => {
      setVisible(isVisible);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="nous">
      <div ref={ref} className={visible ? "nous-container show" : "nous-container"}>
        <h1 className="btn-shine">Pourquoi nous</h1>
        <h2 className="nousH">Pourquoi les entreprises font confiance à notre <span>expertise</span></h2>

        <div className="grid">
          <div className="Ncard">
            <h1>01</h1>
            <h4>Approche sur mesure</h4>
            <p>
              Chaque projet est adapté à vos besoins pour garantir des résultats
              efficaces et durables.
            </p>
          </div>
          <div className="Ncard">
            <h1>02</h1>
            <h4>Équipe expérimentée</h4>
            <p>
              Une équipe qualifiée qui maîtrise les outils et les stratégies
              digitales modernes.
            </p>
          </div>
          <div className="Ncard">
            <h1>03</h1>
            <h4> Décisions basées sur la data</h4>
            <p>
              Nous analysons les données pour optimiser vos performances et
              maximiser votre retour.
            </p>
          </div>
          <div className="Ncard">
            <h1>04</h1>
            <h4>Accompagnement continu </h4>
            <p>
              Nous vous accompagnons à chaque étape pour assurer la réussite de
              votre projet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
