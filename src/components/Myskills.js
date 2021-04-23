import React from 'react';
import { motion } from "framer-motion";
import  "./Myskills.css";

function Myskills() {
  return (
    <motion.div
      style={ pageStyle }
      className="row"
      initial="initial"
      animate="in"
      exit="out"
      variants={ pageVariants }
      transition={ pageTransition }
    >
    <div className="head">
      <h1>Skills & <br/>
          Experience
      </h1>
    </div>

    <div className="container1">
      <div className="skills">

          <li>
            <h6>HTML</h6><span className="bar"><span className="html"></span></span>
          </li>
          <li>
            <h6>CSS</h6><span className="bar"><span className="css"></span></span>
          </li>
          <li>
            <h6>Javascript-JQuery</h6><span className="bar"><span className="jquery"></span></span>
          </li>
          <li>
            <h6>React</h6><span className="bar"><span className="react"></span></span>
          </li>
          <li>
            <h6>Node-Express</h6><span className="bar"><span className="node"></span></span>
          </li>
          <li>
            <h6>MongoDB</h6><span className="bar"><span className="mongo"></span></span>
          </li>
          <li>
            <h6>SQL-Postgresql</h6><span className="bar"><span className="postgresql"></span></span>
          </li>
        </div>
        <div className="skills">


            <p>
              I have been working as a Business Analyst with Product team, within IT department since last 5+ years. I have helped organisation by aligning their fluctuating business needs with emerging technologies such as SaaS, RPA, CRM, Digitization, API to attain business goals.
            </p>
            <p>
               I beleive iterative and incremental development leads to qualitative, sustainable, intuitive and user friendly product. It also helps to cultivate continuous improvement culture within a team. which shifts team's mindset to be pro-active rather than reactive. I have worked in different methodologies such as but not limited to Agile, Prince2, Waterfall.
            </p>

        </div>
      </div>
    </motion.div>

  );
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const pageStyle = {
  position: "absolute"
};

export default Myskills;
