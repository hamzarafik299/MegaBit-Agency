import "./about.css";
import BlurText from "../../animation/BlurText";
import Header from "../../animation/header";
import PageTransition from "../../animation/PageTransition";

export default function About() {
  return (
    <PageTransition>
      <Header />
      <div className="about">
        <div className="secondService-first">
          <h1>
            <BlurText
              text="\u00C0 PROPOS"
              delay={200}
              animateBy="words"
              direction="top"
            />
          </h1>
        </div>
        <div className="secondService-second">
          <div className="grid-service">
            <div className="card-service">
              <div className="card2"></div>
            </div>
            <div className="card-service">
              <div className="card2"></div>
            </div>
            <div className="card-service">
              <div className="card2"></div>
            </div>
            <div className="card-service">
              <div className="card2"></div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
