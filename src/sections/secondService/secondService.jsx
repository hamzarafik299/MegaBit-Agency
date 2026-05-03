import Header from "../../animation/header";
import "./secondService.css";
import BlurText from "../../animation/BlurText";
import PageTransition from "../../animation/PageTransition";
import Footer from "../../sections/footer/footer";
import { motion } from "framer-motion";
import React from "react";
import Image2 from "../../assets/secondService2.png";
import {
  FaVideo,
  FaPaintBrush,
  FaCalendarAlt,
  FaChartLine,
  FaBullhorn,
  FaPen,
} from "react-icons/fa";
import {
  FaWordpress,
  FaMobileAlt,
  FaSearch,
  FaTools,
  FaGlobe,
} from "react-icons/fa";

import {
  FaShoppingCart,
  FaCalendarCheck,
  FaChartPie,
  FaCogs,
} from "react-icons/fa";

const automationServices = [
  {
    title: "Gestion des ventes automatisée",
    icon: <FaShoppingCart />,
  },
  {
    title: "Système de réservation en ligne",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Suivi des clients et des performances",
    icon: <FaChartPie />,
  },
  {
    title: "Outils adaptés à votre activité",
    icon: <FaCogs />,
  },
];

const webServices = [
  {
    title: "Création de sites web sur mesure (WordPress ou Next.js)",
    icon: <FaWordpress />,
  },
  {
    title: "Design responsive (adapté à tous les écrans)",
    icon: <FaMobileAlt />,
  },
  {
    title: "Optimisation SEO pour améliorer votre visibilité sur Google Search",
    icon: <FaSearch />,
  },
  {
    title: "Intégration de fonctionnalités (formulaire, réservation, etc.)",
    icon: <FaTools />,
  },
  {
    title: "Configuration du nom de domaine et hébergement",
    icon: <FaGlobe />,
  },
];
export default function SecondService() {
  const services = [
    {
      title: "Création de contenu (posts & reels)",
      icon: <FaPen />,
    },
    {
      title: "Montage vidéo professionnel",
      icon: <FaVideo />,
    },
    {
      title: "Design graphique personnalisé",
      icon: <FaPaintBrush />,
    },
    {
      title: "Gestion et planification des publications",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Optimisation des comptes",
      icon: <FaChartLine />,
    },
    {
      title: "Gestion des campagnes publicitaires",
      icon: <FaBullhorn />,
    },
  ];
  return (
    <PageTransition>
      <Header />
      <div className="secondService" id="secondService">
        <div className="secondService-first">
          <h1>
            <BlurText
              text="NOS SERVICES"
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
            <h1 className="services-title">Gestion des Réseaux Sociaux</h1>
            <div className="image-service">
              <div className="service-text">
                <p>
                  Nous accompagnons les entreprises dans le développement de
                  leur présence sur les réseaux sociaux grâce à une gestion
                  complète et stratégique.
                </p>
                <ul className="services-list">
                  {services.map((service, index) => (
                    <li key={index} className="service-item">
                      <span className="service-icon">{service.icon}</span>
                      <span className="service-text">{service.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src="https://i.pinimg.com/736x/c2/cd/12/c2cd123596debff14d550f47c8800c76.jpg"
                alt="service1"
              />
            </div>
          </div>
        </motion.div>
        <div className="secondService-second">
          <div className="card-service">
            <h1 className="services-title">Création de Sites Web</h1>
            <div className="image-service">
              <img
                src="https://i.pinimg.com/1200x/ae/e2/ab/aee2ab90ba9cf6e4dd765dfeefbb4f2a.jpg"
                alt="service1"
              />
              <div className="service-text">
                <p>
                  Nous accompagnons les entreprises dans le développement de
                  leur présence sur les réseaux sociaux grâce à une gestion
                  complète et stratégique.
                </p>
                <ul className="services-list">
                  {webServices.map((service, index) => (
                    <li key={index} className="service-item">
                      <span className="service-icon">{service.icon}</span>
                      <span className="service-text">{service.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="secondService-second">
          <div className="card-service">
            <h1 className="services-title">
              Création de Systèmes de Gestion Sur Mesure
            </h1>
            <div className="image-service">
              <div className="service-text">
                <p>
                  Nous accompagnons les entreprises dans le développement de
                  leur présence sur les réseaux sociaux grâce à une gestion
                  complète et stratégique.
                </p>
                <ul className="services-list">
                  {automationServices.map((service, index) => (
                    <li key={index} className="service-item">
                      <span className="service-icon">{service.icon}</span>
                      <span className="service-text ">{service.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src="https://i.pinimg.com/1200x/71/a0/36/71a036681c5054c33773da4fcfa61f41.jpg"
                alt="service1"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer  />
    </PageTransition>
  );
}
