import { useState, useCallback } from "react";
import CarouselCard from "./CarouselCard";
import CarouselDots from "./CarouselDots";
import CarouselControls from "./CarouselControls";
import "./carousel.css";

const CARDS = [
  {
    title: "Création de Sites Web Professionnels",
    desc: "Nous concevons des sites web modernes, rapides et entièrement adaptés à tous les appareils avec optimisation SEO",
    img: "https://i.pinimg.com/736x/60/9e/aa/609eaa4321ab5ba8f0b7a9828192873c.jpg",
    bg: "#9984d4",
  },
  {
    title: "Gestion des Réseaux Sociaux & Création de Contenu Professionnel",
    desc: "Développement de leur présence sur les réseaux sociaux grâce à une gestion complète et stratégique",
    img: "https://i.pinimg.com/736x/eb/75/b1/eb75b12bf1160d6d6c27fdd9d6231e5b.jpg",
    bg: "#9984d4",
  },
  {
    title: "Création de Branding Stratégique & Identité Visuelle",
    desc: "Nous aidons votre marque à se démarquer grâce à une identité visuelle forte et une stratégie claire.",
    img: "https://i.pinimg.com/1200x/15/21/c7/1521c7781296d344caf0426669695a5d.jpg",
    bg: "#9984d4",
  },
  {
    title: "Solutions Digitales Intelligentes pour Automatiser Votre Business",
    desc: "Développant des systèmes intelligents et des solutions SaaS sur mesure, adaptés à leurs besoins spécifiques.",
    img: "https://i.pinimg.com/1200x/c3/78/54/c378541fa946d2cc4b4a449d38be8263.jpg",
    bg: "#9984d4",
  },
];

/**
 * Returns position label for each card index relative to the active card.
 * "center" | "left" | "right" | "hidden"
 */
function getPositions(active, total) {
  return Array.from({ length: total }).map((_, i) => {
    const rel = ((i - active) % total + total) % total;
    if (rel === 0) return "center";
    if (rel === 1) return "right";
    if (rel === total - 1) return "left";
    return "hidden";
  });
}

const Carousel = ({ cards = CARDS }) => {
  const [current, setCurrent] = useState(0);
  const total = cards.length;

  const goTo = useCallback(
    (idx) => {
      setCurrent(((idx % total) + total) % total);
    },
    [total]
  );

  const positions = getPositions(current, total);

  return (
    <div
      className="carousel-shell"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0",
        userSelect: "none",
        width: "100%",
        height: "480px",
        boxSizing: "border-box",
      }}
    >
      {/* Track — full width, clipped so side cards peek but don't overflow */}
      <div
        className="carousel-track"
        style={{
          position: "relative",
          width: "100%",
          height: 520,
          overflow: "hidden",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className={`carousel-card-slot is-${positions[i]}`}
            onClick={() => positions[i] !== "center" && goTo(i)}
            style={{ position: "absolute", inset: 0 }}
          >
            <CarouselCard card={card} position={positions[i]} />
          </div>
        ))}
      </div>

      {/* Controls row */}
      <div
        className="carousel-controls-row"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginTop: "1.8rem",
        }}
      >
        <CarouselControls
          onPrev={() => goTo(current - 1)}
          onNext={() => goTo(current + 1)}
        />
        <CarouselDots total={total} current={current} onDotClick={goTo} />
      </div>
    </div>
  );
};

export default Carousel;
