import "./home.css";
import BlurText from "../../animation/BlurText";
import Header from "../../animation/header";
import Object from "../../assets/Object.png";
import fea from "../../assets/fea.png";
import abst1 from "../../assets/abstract1.png";
import abst2 from "../../assets/abstract2.png";
import abst3 from "../../assets/abstract3.png";
import Objet2 from "../../assets/obj1-1.png";
import { useNavigate } from "react-router-dom";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";



import { motion, useScroll, useTransform } from "framer-motion";

const MotionImg = motion.img;

export default function Home() {
  const navigate = useNavigate();
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [1000, 5000], ["200px", "500px"]);
  const translateDn = useTransform(scrollY, [0, 3000], [0, 400]);
  const rotate = useTransform(scrollY, [0, 2000], [0, -400]);
  const translateY = useTransform(scrollY, [0, 3000], [0, -400]);

  return (
    <div className="home" id="home">
      {/* HEADER */}
      <Header />

      {/* BODY */}
      <div className="body">
        <div className="text">
          <div className="firstText">
            <img src={home1} alt="Home 1" />
            <img src={home2} alt="Home 2" />

            <h1>
              <BlurText
                text="MEGABYTE"
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
                text="Megabit est une agence digitale spécialisée dans la création de stratégies
performantes,"
                delay={100}
                animateBy="words"
                direction="top"
              />
              <BlurText
                text=" de solutions créatives et de systèmes digitaux conçus pour accélérer
la croissance des entreprises"
                delay={100}
                animateBy="words"
                direction="top"
              />
            </h3>
            <MotionImg
              className="desktop-only-media"
              src={Objet2}
              alt=""
              style={{ rotate }}
            />
            <div className="rightBlock">
              <div className="textP">
                <span>+50</span> <p>Projets réalisés avec succès</p>
              </div>
              <button
                className="animated-button"
                onClick={() => navigate("/contact")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>

                <span className="text">Parler à un expert</span>

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
          Des solutions puissantes pour simplifier votre{" "}
          <span>
            <strong>croissance digitale</strong>
          </span>
        </h2>

        <h3>
          Nous combinons stratégie, créativité et technologie pour créer des
          solutions digitales performantes adaptées à vos objectifs.
        </h3>

        <div className="homeCnt">
          <div className="leftCnt">
            <h1>UI/UX Design</h1>
            <h3>Sassly-CRM in the past allowing you to</h3>

            <MotionImg
              className="desktop-only-media"
              src={Object}
              alt=""
              style={{ rotate }}
            />
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

            <div className="containerImg desktop-only-media">
              <MotionImg src={fea} alt="" style={{ y: translateY }} />
            </div>
          </div>
        </div>
        <div className="thirdSec">
          <div className="first-one">
            <h1>Stratégies digitales basées sur les données</h1>
            <MotionImg
              className="desktop-only-media"
              src={abst2}
              alt=""
              style={{ y: translateDn }}
            />
          </div>
          <div className="second-one">
            <MotionImg
              className="desktop-only-media"
              src={abst1}
              alt=""
              style={{ y: translateY }}
            />
            <h1>Création de contenu visuel & Animation</h1>
          </div>
          <div className="third-one">
            <h1> Identité de marque forte et impactante</h1>
            <MotionImg
              className="desktop-only-media"
              src={abst3}
              alt=""
              style={{ width }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
