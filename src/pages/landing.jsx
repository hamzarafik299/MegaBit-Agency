import Home from "../sections/home/home.jsx";
import Services from "../sections/services/services.jsx";
import WeAre from "../sections/weare/weare.jsx";
import "./landing.css";
import Nous from "../sections/Nous/Nous.jsx";
import Faqs  from "../sections/faqs/faqs.jsx";
import Footer from "../sections/footer/footer.jsx";
import PageTransition from "../animation/PageTransition.jsx";

export default function Landing() {
  return (
    <PageTransition>
      <main className="landing-page">
        <Home />
      
        <Services />
        <Nous />
        <Faqs />
        <Footer />
      </main>
    </PageTransition>
  );
}
