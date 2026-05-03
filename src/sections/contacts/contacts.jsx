import "./contacts.css";
import logo from "../../assets/logo.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PageTransition from "../../animation/PageTransition";

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

      alert("Message envoy\u00E9 !");
      form.current.reset();
    } catch (error) {
      alert("Erreur d'envoi");
      console.log(error.text || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="contacts" id="contacts">
        <div className="contactHeader">
          <img src={logo} alt="Logo" />
          <h1>Contact Us</h1>
        </div>

        <div className="form-container">
          <form ref={form} className="form" onSubmit={sendEmail}>
            <div className="form-group">
              <label>Nom & Pr\u00E9nom</label>
              <input type="text" name="name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" />
            </div>

            <div className="form-group">
              <label>Num\u00E9ro</label>
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
      </div>
    </PageTransition>
  );
}
