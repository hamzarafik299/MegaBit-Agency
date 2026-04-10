const CarouselDots = ({ total, current, onDotClick }) => {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          style={{
            width: i === current ? 22 : 8,
            height: 8,
            borderRadius: 99,
            border: "none",
            cursor: "pointer",
            padding: 0,
            background: i === current ? "#592e83" : "#CAA8F5",
            transition: "width 0.3s ease, background 0.3s ease",
          }}
          aria-label={`Go to card ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
