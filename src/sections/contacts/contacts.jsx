import "./contacts.css";
import Cursor from "../../animation/cusor.jsx";
import logo from "../../assets/logo.png";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_ot8a6eg",
        "template_8o3g0rq",
        form.current,
        "nCDBVl96LFIXfMeNk"
      );

      alert("Message envoyé !");
      form.current.reset();
    } catch (error) {
      alert("Erreur d'envoi");
      console.log(error.text || error);
    } finally {
      setLoading(false);
    }
  };

  return (
     <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
    <div className="contacts" id="contacts">
      <div className="contactHeader">
        <img src={logo} alt="Logo" />
        <h1>Contact Us</h1>
      </div>

      <div className="form-container">
        <form ref={form} className="form" onSubmit={sendEmail}>
          <div className="form-group">
            <label>Nom & Prénom</label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" />
          </div>

          <div className="form-group">
            <label>Numéro</label>
            <input type="tel" name="phone" required />
          </div>

          <div className="buttons">
            <button
              type="submit"
              className="form-submit-btn"
              disabled={loading}
            >
              {loading ? "Envoi..." : "envoyer"}
            </button>
          </div>
        </form>
      </div>

      {loading && (
        <div className="loading-overlay">
          <div className="loading-card">
            <div className="spinner"></div>
            <p>Envoi des informations...</p>
          </div>
        </div>
      )}

      <Cursor />
    </div>
    </motion.div>
  );
}