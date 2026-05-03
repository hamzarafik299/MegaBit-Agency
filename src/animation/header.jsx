import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const NAV_ITEMS = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "SERVICES", to: "/services" },
  { label: "CONTACT", to: "/contact" },
];

function HeaderLink({ item, className, onSelect }) {
  const location = useLocation();

  const handleClick = (event) => {
    onSelect?.();

    if (item.to === "/" && location.pathname === "/" && !location.hash) {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  };

  if (item.to) {
    return (
      <Link className={className} to={item.to} onClick={handleClick}>
        {item.label}
      </Link>
    );
  }

  return (
    <a className={className} href={item.href} onClick={onSelect}>
      {item.label}
    </a>
  );
}

function MobileMenu({ active, show, onSelect }) {
  return (
    <div className={active && show ? "menu active" : "menu"}>
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <HeaderLink item={item} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function BurgerToggle({ active, onToggle }) {
  return (
    <label className="burger" htmlFor="burger">
      <input
        type="checkbox"
        id="burger"
        checked={active}
        onChange={(event) => onToggle(event.target.checked)}
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

function DesktopNavigation() {
  return (
    <nav className="navContainer">
      <ul className="nav">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <HeaderLink item={item} className="eft" />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShow(
        currentScrollY < lastScrollY.current || currentScrollY < 16
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!show) {
      setActive(false);
    }
  }, [show]);

  const closeMenu = () => setActive(false);

  const goToContactPage = () => {
    closeMenu();
    navigate("/contact");
  };

  return (
    <>
      <MobileMenu active={active} show={show} onSelect={closeMenu} />

      <div className={`header ${show ? "show" : "hide"}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <BurgerToggle active={active} onToggle={setActive} />
        <DesktopNavigation />

        <button type="button" onClick={goToContactPage} className="btn">
          Contactez-nous
        </button>
      </div>
    </>
  );
}
