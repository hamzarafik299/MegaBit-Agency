import "./home.css";
import logo from "../../assets/logo.png";
import BlurText from "../../animation/BlurText";
import Object from "../../assets/Object.png";
import fea from "../../assets/fea.png";
import abst1 from "../../assets/abstract1.png";
import abst2 from "../../assets/abstract2.png";
import abst3 from "../../assets/abstract3.png";
import Objet2 from "../../assets/obj1-1.png";
import { useEffect, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const { scrollY } = useScroll();
   const width = useTransform(scrollY, [0, 3000], ["150px", "400px"]);
  const translateDn = useTransform(scrollY, [0, 3000], [0, 400]);
  const rotate = useTransform(scrollY, [0, 2000], [0, -400]);
  const translateY = useTransform(scrollY, [0, 3000], [0, -400]);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div className="home" id="home">
      {/* HEADER */}
      <div  className={`header ${show ? "show" : "hide"}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className="navContainer">
          <ul className="nav">
            <li>
              <button className="eft"><a className="eft" href="#home">HOME</a></button>
            </li>
            <li>
              <button className="eft"><a className="eft" href="#about">ABOUT</a></button>
            </li>
            <li>
              <button className="eft"><a className="eft" href="#services">SERVICES</a></button>
            </li>
            <li>
              <button className="eft"><a className="eft" href="#projects">PROJETS</a></button>
            </li>
            <li>
              <button className="eft"><a className="eft" href="#contact">CONTACT</a></button>
            </li>
          </ul>
        </nav>

        <button className="btn">Contactez-nous</button>
      </div>

      {/* BODY */}
      <div className="body">
        <div className="text">
          <div className="firstText">
            <h1>
              <BlurText
                text="MEGABIT"
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
              <section>
                <BlurText
                  text="AGENCY"
                  delay={200}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                />
              </section>
            </h1>
          </div>
          <hr />
          <div className="homeSecond">
            <h3>
              <BlurText
                text="Agence digitale spécialisée en web applications et"
                delay={200}
                animateBy="words"
                direction="top"
              />
              <BlurText
                text="marketing pour accélérer la croissance des entreprises."
                delay={200}
                animateBy="words"
                direction="top"
              />
            </h3>
            <motion.img src={Objet2} alt="" style={{ rotate }} />
            <div className="rightBlock">
              <h3>Partenaires au Maroc & à l’international</h3>
              <button className="animated-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>

                <span className="text">Vois plus</span>

                <span className="circle"></span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="secondSlide" id="about">
        <h1 className="btn-shine">Nos fonctionnalités</h1>

        <h2>
          Des solutions puissantes pour{" "}
          <span>développer votre business digitals</span>
        </h2>

        <h3>
          Nous combinons stratégie, créativité et technologie pour créer des
          solutions digitales performantes adaptées à vos objectifs.
        </h3>

        <div className="homeCnt">
          <div className="leftCnt">
            <h1>UI/UX Design</h1>
            <h3>Sassly-CRM in the past allowing you to</h3>

            <motion.img src={Object} alt="" style={{ rotate }} />
          </div>

          <div className="rightCnt">
            <div className="rightCntText">
              <h1>Design Créatif & Impactant</h1>
              <h3>
                Nous concevons des expériences visuelles modernes et
                stratégiques qui renforcent votre image de marque et captivent
                votre audience.
              </h3>
              <div className="elemnts">
                <h6>Web Design / SEO</h6>
                <h6>social media marketing</h6>
              </div>
              <h6 className="branding">Branding</h6>
            </div>

            <div className="containerImg">
              <motion.img src={fea} alt="" style={{ y: translateY }} />
            </div>
          </div>
        </div>
        <div className="thirdSec">
        <div className="first-one">
          <h1>Stratégies digitales basées sur les données</h1>
          <motion.img src={abst2} style={{ y: translateDn }} />
        </div>
        <div className="second-one">
          <motion.img src={abst1} alt="" style={{ y: translateY }} />
          <h1>Création de contenu visuel & Animation</h1>
          
        </div>
        <div className="third-one">
          <h1> Identité de marque forte et impactante</h1>
          <motion.img src={abst3} alt="" style={{ width }}  />
        </div>
      </div>
      </div>
      
    </div>
  );
}
