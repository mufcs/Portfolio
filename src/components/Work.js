import React from 'react';
import { motion } from "framer-motion";
import "./Work.css";


function Work() {
  return (
    <motion.div
      style={ pageStyle }
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Work</h1>
        <div className="top__liner">
          A small gallery of recent projects. Some of these projects were done by myself and some with an amazing people whom I met at General Assembly. Promising start and more in the pipeline.
        </div>
        <div class="cards">
  <div class="card">
    <img class="card__image" src="https://i.imgur.com/si2I82K.png" alt=""/>
    <div class="card__content">
      <p>
        Zelibrary is a virtual library where you are able to search/add/delete/review book/s.
      </p>
      <p>
        <strong>Tech stack</strong><br/>
        ReactJs, NodeJs-Express, MongoDB
      </p>
    </div>
    <div class="card__info">
      <div>
        <a href="https://zeibrary.netlify.app/" target="_blank" class="card__link">View Project</a>
      </div>
    </div>
  </div>
  <div class="card">
    <img class="card__image" src="https://i.imgur.com/xvCCHIO.png" alt=""/>
    <div class="card__content">
      <p>
        SlackMe is a real time responsive web communication platform, Which is inspired by platform called Slack.
      </p>
      <p>
        <strong>Tech stack</strong><br/>
        ReactJs, Firebase, Material-UI
      </p>
    </div>
    <div class="card__info">
      <div>
        <a href="https://slameme-portfolio.web.app/" target="_blank" class="card__link">View Project</a>
      </div>
    </div>
  </div>
  <div class="card">
    <img class="card__image" src="https://i.imgur.com/qw3psLj.png" alt=""/>
    <div class="card__content">
      <p>
        Tic-tac-toe is a classic game for two players, which is played in a 3x3 grid. Also known as Xs and Os.
      </p>
      <p>
        <strong>Tech stack</strong><br/>
        HTML, CSS, Javascript-JQuery
      </p>
    </div>
    <div class="card__info">
      <div>
        <a href="https://mufcs.github.io/tic-tak-toe/" target="_blank" class="card__link">View Project</a>
      </div>
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

export default Work;
