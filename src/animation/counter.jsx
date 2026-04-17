import React, { useEffect, useRef, useState } from "react";
import { createObserver } from "./Observator"; // your observer file

function AnimatedCounter({ target = 50, duration = 2000 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const observer = createObserver(() => {
      if (!started) {
        setStarted(true); // make sure it only triggers once
        let start = 0;
        const incrementTime = Math.floor(duration / target); // ms per step

        const interval = setInterval(() => {
          start += 1;
          setCount(start);
          if (start >= target) clearInterval(interval);
        }, incrementTime);
      }
    });

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [started, target, duration]);

  return (
    <div className="animated-counter" ref={ref} style={{ fontSize: "2rem", fontWeight: "bold" }}>
        <h3>{count}+</h3>
      
    </div>
  );
}

export default AnimatedCounter;
