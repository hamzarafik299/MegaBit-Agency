import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./sections/contacts/contacts.jsx";
import Landing from "./pages/landing.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;