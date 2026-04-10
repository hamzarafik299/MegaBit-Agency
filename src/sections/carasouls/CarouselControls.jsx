import { useState } from "react";

const ArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CtrlButton = ({ onClick, children, direction }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        border: "2px solid #9984d4",
        background: hovered ? "#CAA8F5" : "transparent",
        color: hovered ? "#26215C" : "#592e83",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.2s, color 0.2s",
        padding: 0,
      }}
      aria-label={direction === "prev" ? "Previous card" : "Next card"}
    >
      {children}
    </button>
  );
};

const CarouselControls = ({ onPrev, onNext }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <CtrlButton onClick={onPrev} direction="prev"><ArrowLeft /></CtrlButton>
    <CtrlButton onClick={onNext} direction="next"><ArrowRight /></CtrlButton>
  </div>
);

export default CarouselControls;
