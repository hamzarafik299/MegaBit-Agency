import { useState, useCallback } from "react";
import CarouselCard from "./CarouselCard";
import CarouselDots from "./CarouselDots";
import CarouselControls from "./CarouselControls";

const CARDS = [
  {
    title: "Web Design & Development",
    desc: "We create modern, fast, and conversion-focused websites tailored to your business needs.",
    img: "https://i.pinimg.com/736x/60/9e/aa/609eaa4321ab5ba8f0b7a9828192873c.jpg",
    bg: "#9984d4",
  },
  {
    title: "Digital Marketing",
    desc: "Grow your business with targeted strategies, ads, and campaigns that bring real results.",
    img: "https://i.pinimg.com/1200x/69/6d/ca/696dca0baf60b68bd4d023dee0d38d57.jpg",
    bg: "#9984d4",
  },
  {
    title: "Brand Identity Design",
    desc: "We build strong and memorable brand identities that make you stand out in your market.",
    img: "https://dev261.kodesolution.com/degency/wp-content/uploads/2026/03/services6-672x448.jpg",
    bg: "#9984d4",
  },
  {
    title: "Brand Identity Design",
    desc: "Creative Branding Build a unique identity that captures attention and leaves a lasting impression on your audience.",
    img: "https://dev261.kodesolution.com/degency/wp-content/uploads/2026/02/bg-news2-672x448.jpg",
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
        style={{
          position: "relative",
          width: "100%",
          height: 420,
          overflow: "hidden",
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => positions[i] !== "center" && goTo(i)}
            style={{ position: "absolute", inset: 0 }}
          >
            <CarouselCard card={card} position={positions[i]} />
          </div>
        ))}
      </div>

      {/* Controls row */}
      <div
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
