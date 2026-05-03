import "./about.css";
import BlurText from "../../animation/BlurText";
import Header from "../../animation/header";
import PageTransition from "../../animation/PageTransition";
import { motion } from "framer-motion";
import Footer from "../../sections/footer/footer";
import {
  FaRocket,
  FaLightbulb,
  FaBullseye,
  FaGlobe,
  FaChartLine,
  FaBullhorn,
  FaLaptopCode,
  FaPalette,
} from "react-icons/fa";
export default function About() {
  

  const missionItems = [
    {
      title: "Aider les entreprises à se développer en ligne",
      icon: <FaRocket />,
    },
    {
      title: "Apporter des solutions digitales efficaces",
      icon: <FaLightbulb />,
    },
    {
      title: "Créer des stratégies orientées résultats",
      icon: <FaBullseye />,
    },
  ];

  return (
    <PageTransition>
      <Header />
      <div className="about" id="secondService">
        <div className="secondService-first">
          <h1>
            <BlurText
              text="À propos"
              delay={200}
              animateBy="words"
              direction="top"
            />
          </h1>
        </div>
        <motion.div
          className="secondService-second"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-service">
            <h1 className="services-title">Qui sommes-nous?</h1>
            <div className="image-service">
              <div className="about-text">
                <p>
                  Nous sommes une agence digitale spécialisée dans la création
                  de solutions innovantes :<br /> gestion des réseaux sociaux,
                  développement de sites web et systèmes intelligents. Notre
                  mission est d’aider les entreprises à se démarquer et à
                  générer plus de clients.
                </p>
              </div>
              <img
                src="https://i.pinimg.com/1200x/b2/de/d4/b2ded4efad3725a7a1ef9dc45fcf8ab7.jpg"
                alt="service1"
              />
            </div>
          </div>
        </motion.div>
        <div className="secondService-second">
          <div className="card-service">
            <h1 className="services-title">Notre mission</h1>
            <div className="image-service">
              <img
                src="https://i.pinimg.com/1200x/20/5e/f5/205ef5e27daa2642ff80d059fc4df267.jpg"
                alt="service1"
              />
              <div className="about-text">
                <ul className="services-list">
                  {missionItems.map((item, index) => (
                    <li key={index} className="service-item about-item">
                      <span className="service-icon about-icon">
                        {item.icon}
                      </span>
                      <span className="service-text about-text-second">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="secondService-second">
          <div className="card-service">
            <h1 className="services-title">Notre vision</h1>
            <div className="image-service">
              <div className="about-text">
                <p>
                  Devenir un partenaire digital de référence pour les
                  entreprises qui veulent évoluer et réussir dans le monde
                  numérique.
                </p>
              </div>
              <img
                src="https://i.pinimg.com/1200x/f5/36/28/f536283598da62d5625eb452dbe33e58.jpg"
                alt="service1"
               />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </PageTransition>
  );
}
