import "./contacts.css";
import BlurText from "../../animation/BlurText";
import logo from "../../assets/logo.png";
import { useRef, useState } from "react";
import Select from "react-select";
import emailjs from "@emailjs/browser";
import Header from "../../animation/header";
import PageTransition from "../../animation/PageTransition";

export default function Contact() {
  const form = useRef();
  const serviceSelectRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [serviceError, setServiceError] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    service: "",
  });

  const options = [
    { value: "Gestion de réseaux sociaux", label: "Gestion de réseaux sociaux" },
    { value: "Création de site web", label: "Création de site web" },
    { value: "Création d’un système de gestion", label: "Création d’un système de gestion" },
    { value: "Autre", label: "Autre" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formData.service.trim()) {
      setServiceError(true);
      serviceSelectRef.current?.focus();
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_97i9wva",
        "template_mkuyzgc",
        form.current,
        "B0bUPT3zvEdxJ2xYN"
      );

      alert("Message envoyé !");
      form.current.reset();

      setFormData({
        nom: "",
        prenom: "",
        telephone: "",
        service: "",
      });
      setServiceError(false);
    } catch (error) {
      alert("Erreur d'envoi");
      console.log(error.text || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <Header />

      <div className="contacts" id="contacts">
        <div className="secondService-first">
          <h1>
            <BlurText
              text="CONTACTS"
              delay={200}
              animateBy="words"
              direction="top"
            />
          </h1>
        </div>

        <div className="contactHeader">
          <img src={logo} alt="Logo" />
          <h1>Contact Us</h1>
        </div>

        <div className="form-container">
          <form ref={form} className="form" onSubmit={sendEmail}>
            <h2>Demande de Service</h2>

            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Prénom</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Numéro de téléphone</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Type de service</label>

              <Select
                ref={serviceSelectRef}
                options={options}
                value={options.find((opt) => opt.value === formData.service)}
                onChange={(selected) => {
                  setFormData({
                    ...formData,
                    service: selected ? selected.value : "",
                  });
                  setServiceError(!selected);
                }}
                placeholder="Choisir un service"
                aria-invalid={serviceError}
                aria-required="true"
                styles={{
                  control: (base) => ({
                    ...base,
                    width: "100%",
                    padding: "0.4rem",
                    border: `1px solid ${serviceError ? "#d93025" : "#414141"}`,
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                    color: "#fff",
                  }),
                  menu: (base) => ({
                    ...base,
                    backgroundColor: "#111",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: "#fff",
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: "#aaa",
                  }),
                  input: (base) => ({
                    ...base,
                    color: "#fff",
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isFocused ? "#222" : "#111",
                    color: "#fff",
                    cursor: "pointer",
                  }),
                }}
              />

              <input
                type="hidden"
                name="service"
                value={formData.service}
              />
              {serviceError && (
                <span className="field-error">Veuillez choisir un service.</span>
              )}
            </div>

            <button className="buttons" type="submit" disabled={loading}>
              {loading ? "Envoi..." : "Envoyer"}
            </button>
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
