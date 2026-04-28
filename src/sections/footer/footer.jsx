import './footer.css';
import { useNavigate } from "react-router-dom";
export default function Footer(){
     const navigate = useNavigate();
    return (
        <>
        <div className='footer-container'>
            <div className="footer-block1">
                <p>Investir intelligemment commence ici. Grandissons ensemble – <span>dès aujourd’hui !</span></p>
                <button className="animated-button" onClick={() => navigate("/contact")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>

                <span className="text">Parler à un expert</span>

                <span className="circle"></span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="arr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
              </button>
            </div>
        <hr />
            <div className="footer-block2"></div>
            <hr />
            
        </div>
     <div className="footer-block3">
        <h6>© Copyright 2026 by Megabit.com</h6>
     </div>
        </>
    )
}