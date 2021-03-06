import React from 'react';
import { motion } from "framer-motion";
// import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import"./About.css"
import"./Reuse.css"


function About() {
  return (
    <motion.div
      style={ pageStyle }
      initial="initial"
      animate="in"
      exit="out"
      variants={ pageVariants }
      transition={ pageTransition }
    >
        <div className= "top1">
          <a href="#!">
            <span>M</span>
            <span>e</span>
            <span>,</span>
            <a href="#!" className="dist">
            <span>M</span>
            <span>y</span>
            <span>s</span>
            <span>e</span>
            <span>l</span>
            <span>f</span>
            </a>
            <a href="#!" className="dist">
            <span> & </span>
            </a>
            <a href="#!" className="dist">
            <span>I</span>
            </a>
          </a>
        </div>
        <div className="top_brief">
          <div className="Brief__me">
          <p>
            Hey there 👋 , I am Amish Adhikari. A software engineer graduate from General Assembly, with over 5 years of experience in IT industry as a Business Analyst and Scrum Master. I have a serious passion for UI effects, animations, creating intuitive and dynamic user experience.
          </p>
          <p>
            Working in a product team within IT department and being technically illiterate, led me to the journey of being a software engineer. Moreover, being a gamer since childhood, I always carved a niche for myself, being a techno functional person.
          </p>
          <p>
            My colleagues describe me as a person who is not afraid of failure instead learn from it and innovate. Apart from work I play football, pool games, swim, dance and enjoy scooners/pints with my mates(i.e. professional and personal).I have excellent time management, interpersonal and analytical skills, with strong keep learning attitude.
          </p>
          </div>
        <div className="Brief__me">
          <div className="text1">
            <div className="one">HTML</div>
            <div className="two">CSS</div>
            <div className="three">React</div>
            <div className="four">NodeJs</div>
            <div className="five">MongoDB</div>
            <div className="six">JavaScript-JQuery</div>
            <div className="seven">Firebase</div>
            <div className="eight">Ruby on Rails</div>
            <div className="nine">Postgressql</div>
            </div>
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
export default About;
