// ici on va regroupe tou les section de notre landing page
// // ici on va regroupe tou les section de notre landing page
// import Navbar from "../components/Navbar";
import Home from "../sections/home/home.jsx";
import Services from "../sections/services/services.jsx";
import'./landing.css';


// import About from "../sections/about/about.jsx";
// import Services from "../sections/services/services.jsx";
// import Projects from "../sections/projects/projects.jsx";
// import Contact from "../sections/contacts/contacts.jsx";
// import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
  <div style={{ width: "100%", minHeight: "100vh", position: "relative" }}>

  {/* Background */}
  <div
    style={{
       position: "fixed", 
      inset: 0,
      zIndex: -1,              // 👈 push it behind EVERYTHING
      pointerEvents: "none"    // 👈 allow clicks through
    }}
  >
    
  </div>

  {/* Content */}
  <div style={{ position: "relative", zIndex: 1 }}>
    <Home />
    <Services />
  </div>

</div>
    </>
  );
}