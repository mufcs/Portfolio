import React from 'react';
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import  "./Contact.css";


export default function Contact() {
  function sendEmail(e) {
  e.preventDefault();

emailjs.sendForm('service_5msbb8q', 'template_6yewgib', e.target, 'user_HeLKYW29Z1ogFyr6fChzg')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset()
}
  return (
    <motion.div
      style={ pageStyle }
      initial="initial"
      animate="in"
      exit="out"
      variants={ pageVariants }
      transition={ pageTransition }
    >
    <a href="#!">
      <span>C</span>
      <span>o</span>
      <span>n</span>
      <span>t</span>
      <span>a</span>
      <span>c</span>
      <span>t</span>
      <a href="#!" className="dist">
      <span>m</span>
      <span>e</span>
</a>
    </a>

        <div>
            <div className="container">
              <div className="second_line">Hello there. Nice to see you here. If you want to reach out for opportunities or want to know more about me. Please go ahead and use the form.
              </div>
            <form onSubmit={ sendEmail }>
                    <div>
                      <div className="container1">
                        <div className="box">
                            <input type="text" className="form" placeholder="Name" name="name" required/>
                        </div>
                        <div className="box">
                            <input type="email" className="form" placeholder="Email Address" name="email" required/>
                        </div>
                        </div>
                        <div className="container2">
                        <div className="box1">
                            <input type="text" className="form" placeholder="Subject" name="subject" required/>
                        </div>
                        <div className="box1">
                            <textarea className="form" placeholder="Your message" name="message" required></textarea>
                        </div>
                        </div>
                    </div>
                    <div className="box2">
                        <input  type="submit" className="push_email" value="Send message"></input>
                    </div>
                </form>
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
  position: "absolute",
};
