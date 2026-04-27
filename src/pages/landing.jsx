import Home from "../sections/home/home.jsx";
import Services from "../sections/services/services.jsx";
import WeAre from "../sections/weare/weare.jsx";
import "./landing.css";
import Cursor from "../animation/cusor.jsx";
import Nous from "../sections/Nous/Nous.jsx";

export default function Landing() {
  return (
    <main className="landing-page">
      <Home />
      <WeAre />
      <Services />
      <Cursor />
      <Nous />
    </main>
  );
}
