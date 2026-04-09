import "./services.css";
import { useEffect, useRef, useState } from "react";
import { createObserver } from "../../animation/Observator";
export default function Services() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = createObserver(() => {
      setIsVisible(true); // 👈 trigger style change
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="services">
      <div
        ref={ref}
        className={isVisible ? "servicesHeader show" : "servicesHeader"}
      >
        <h2>Services</h2>
      </div>
      <div ref={ref} className={isVisible ? "cards show" : "cards"}>
        
        <div  ref={ref} className={isVisible ? "left card show" : "left card"}>
            <div>
                <h4>Service 1</h4>
            </div>
        </div>
        <div  ref={ref} className={isVisible ? "mid card show" : "mid card"}>
            <div>
                <h4>Service 1</h4>
            </div>
        </div>
        <div  ref={ref} className={isVisible ? "right card show" : "right   card"}>
            <div>
                <h4>Service 1</h4>
            </div>
        </div>
        <div  ref={ref} className={isVisible ? "left card show" : "left card"}>
            <div>
                <h4>Service 1</h4>
            </div>
        </div>
        <div  ref={ref} className={isVisible ? "mid card show" : "mid card"}>
            <div>
                <h4>Service 1</h4>
            </div>
        </div>
        <div  ref={ref} className={isVisible ? "right card show" : "right   card"}>
            <div>
                <h4>Service 1</h4>
            </div>
        </div>
          
        
      </div>
    </div>
  );
}
