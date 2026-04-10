const CarouselCard = ({ card, position }) => {
  const isDark = card.bg === "#592e83";

  const styles = {
    center: {
      transform: "translateX(-50%) translateY(-50%) scale(1)",
      opacity: 1,
      zIndex: 10,
      boxShadow: "0 24px 70px rgba(89,46,131,0.30)",
      filter: "none",
      cursor: "default",
    },
    left: {
      transform: "translateX(calc(-50% - 42%)) translateY(-50%) scale(0.78)",
      opacity: 0.55,
      zIndex: 5,
      boxShadow: "0 8px 24px rgba(89,46,131,0.10)",
      filter: "brightness(0.8)",
      cursor: "pointer",
    },
    right: {
      transform: "translateX(calc(-50% + 42%)) translateY(-50%) scale(0.78)",
      opacity: 0.55,
      zIndex: 5,
      boxShadow: "0 8px 24px rgba(89,46,131,0.10)",
      filter: "brightness(0.8)",
      cursor: "pointer",
    },
    hidden: {
      transform: "translateX(-50%) translateY(-50%) scale(0.55)",
      opacity: 0,
      zIndex: 1,
      boxShadow: "none",
      filter: "none",
      cursor: "default",
    },
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "50%",
        height: 340,
        borderRadius: 24,
        overflow: "hidden",
        background: card.bg,
        top: "50%",
        left: "50%",
        transition:
          "transform 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease, box-shadow 0.4s ease, filter 0.4s ease",
        willChange: "transform, opacity",
        ...styles[position],
      }}
    >
      <img
        src={card.img}
        alt={card.title}
        style={{ width: "100%", height: 240,  display: "block" }}
      />
      <div style={{ padding: "20px 24px 18px" }}>
        <p
          style={{
            margin: "0 0 8px",
            fontSize: 20,
            fontWeight: 600,
            color: isDark ? "#CAA8F5" : "#26215C",
          }}
        >
          {card.title}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            lineHeight: 1.6,
            color: isDark ? "#b89ee0" : "#3C3489",
          }}
        >
          {card.desc}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
