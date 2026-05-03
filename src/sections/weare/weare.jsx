import "./wear.css";
import { motion } from "framer-motion";
import bg1 from "../../assets/bg1.jpg";
import bg5 from "../../assets/performance.png";
import AnimatedCounter from "../../animation/counter.jsx";
import bg6 from "../../assets/cogwheel.png";

const revealProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function WeAre() {
  return (
    <div className="weare">
      <motion.div className="weare-container" {...revealProps}>
        <h1 className="btn-shine">Who we are</h1>
        <h3 className="Sol">
          Des solutions puissantes pour d\u00E9velopper votre
          <span>
            <strong> business digitals</strong>
          </span>
        </h3>
        <div className="wearCtn">
          <div className="weareImg">
            <img src={bg1} alt="" />
          </div>
          <div className="weareText">
            <AnimatedCounter />
            <h4>
              Plus de 50 projets digitaux r\u00E9alis\u00E9s avec succ\u00E8s
              pour accompagner la croissance de nos clients
            </h4>
            <ul>
              <li>Strat\u00E9gies digitales sur mesure</li>
              <li>D\u00E9veloppement web & applications performantes</li>
              <li>Campagnes marketing orient\u00E9es ROI</li>
              <li>Accompagnement et optimisation continue</li>
            </ul>
          </div>
          <div className="baki">
            <div className="optimisation">
              <div className="block1">
                <div className="blockImage">
                  <img src={bg5} alt="" />
                </div>
                <div className="blockText">
                  <h1>Suivi & optimisation continue</h1>
                  <h4>
                    Nous analysons et am\u00E9liorons en continu vos
                    performances digitales pour garantir des r\u00E9sultats
                    durables
                  </h4>
                </div>
              </div>

              <div className="block2">
                <div className="blockImage">
                  <img src={bg6} alt="" />
                </div>
                <div className="blockText">
                  <h1>Performance & s\u00E9curit\u00E9</h1>
                  <h4>
                    Des solutions fiables, rapides et s\u00E9curis\u00E9es pour
                    assurer la stabilit\u00E9 et la croissance de votre
                    activit\u00E9.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
