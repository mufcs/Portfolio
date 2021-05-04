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
    <div className="second_line">Hello there. Nice to see you here. If you want to reach out for opportunities or want to know more about me. Please go ahead and use the form.
      </div>
      <div className="map__form">
      <form onSubmit={ sendEmail }>
        <div>
          <div class="contact-in">
            <div class="contact-form">
              <input type="text" placeholder="Name" name="name"class="contact-form-txt" required />
              <input type="text" placeholder="Email Address" name="email"  class="contact-form-txt" required />
              <input type="text" placeholder="Subject" name="subject" class="contact-form-txt" required  />
              <textarea placeholder="Your message" name="message" class="contact-form-textarea" required ></textarea>
              <input type="submit" name="Submit" class="contact-form-btn" />
            </div>
          </div>
        </div>
      </form>
      <div class="contact-map">
        <iframe width="100%" height="auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.5988192557256!2d151.05034741550526!3d-33.95144508063352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b94a075612d3%3A0xd0fa66f2deaa0ac7!2sRiverwood!5e0!3m2!1sen!2sau!4v1620100610788!5m2!1sen!2sau">
        </iframe>
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
