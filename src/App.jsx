import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Cursor from "./animation/cusor.jsx";
import Contact from "./sections/contacts/contacts.jsx";
import Landing from "./pages/landing.jsx";
import Services from "./sections/secondService/secondService.jsx"
import About from "./sections/about/about.jsx";

function ScrollToRouteTarget() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const targetId = location.hash.slice(1);
    const timeoutId = window.setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToRouteTarget />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/MegaBit-Agency">
      <Cursor />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
