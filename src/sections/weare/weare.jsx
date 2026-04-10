import "./wear.css";
import bg1 from "../../assets/bg1.jpg";
import bg5 from "../../assets/performance.png";
import AnimatedCounter from "../../animation/counter.jsx";
import bg6 from "../../assets/cogwheel.png";

export default function WeAre() {


  return (
    <div className="weare">
      <h1 className="btn-shine">Who we are</h1>
      <h3>
        Des solutions puissantes pour développer votre
        <span>
          <strong> business digitals</strong>
        </span>
      </h3>
      {/* <AnimatedCounter /> */}
      <div className="wearCtn">
        <div className="weareImg">
          <img src={bg1} />
        </div>
        <div className="weareText">
          <AnimatedCounter />
          <h4>
            Plus de 50 projets digitaux réalisés avec succès pour accompagner la
            croissance de nos clients
          </h4>
          <ul>
            <li>Stratégies digitales sur mesure</li>
            <li>Développement web & applications performantes</li>
            <li>Campagnes marketing orientées ROI</li>
            <li>Accompagnement et optimisation continue</li>
          </ul>
        </div>
        <div className="baki">
          <div className="optimisation">
            <div className="block1">
              <div className="blockImage">
                <img src={bg5} />
              </div>
              <div className="blockText">
                <h1>Suivi & optimisation continue</h1>
                <h4>
                  Nous analysons et améliorons en continu vos performances
                  digitales pour garantir des résultats durables
                </h4>
              </div>
            </div>

            <div className="block2">
              <div className="blockImage">
                <img src={bg6} />
              </div>
              <div className="blockText">
                <h1>Performance & sécurité</h1>
                <h4>
                  Des solutions fiables, rapides et sécurisées pour assurer la
                  stabilité et la croissance de votre activité.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
