import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({ target = 50, duration = 2000 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!isInView || started) return undefined;

    setStarted(true);
    let start = 0;
    const incrementTime = Math.floor(duration / target);

    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(interval);
    }, incrementTime);

    return () => clearInterval(interval);
  }, [duration, isInView, started, target]);

  return (
    <div
      className="animated-counter"
      ref={ref}
      style={{ fontSize: "2rem", fontWeight: "bold" }}
    >
      <h3>{count}+</h3>
    </div>
  );
}

export default AnimatedCounter;
