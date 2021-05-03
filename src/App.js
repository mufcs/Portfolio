import React from "react";
import Work from './components/Work';
import About from './components/About';
import Myskills from './components/Myskills';
import Contact from './components/Contact';
import Unavailable from './components/Unavailable';
import { AnimatePresence } from "framer-motion";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import GetAppIcon from '@material-ui/icons/GetApp';
import "./App.css";
import CopyToClipboard from "./components/CopyToClipboard";

function App() {
  const location = useLocation();

  return (
    <div className="container-fluid bg-dark" style={{ height: "100vh" }}>
      <div className="row">
        <nav
          className="col-6 col-sm-4 col-md-2 py-5"
          style={{ height: "100vh", zIndex: 1000 }}
        >
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link text-white">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/myskills" exact className="nav-link text-white">
                My skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/work" exact className="nav-link text-white">
                Work
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" exact className="nav-link text-white">
                Contact
              </NavLink>
            </li>
          </ul>
          <div my__potraits>
            <img src="https://i.imgur.com/RrBJFGu.png" alt="Amish's Potraits"/>
          </div>
          <div className="links__socialmedia">
            <div className="LinkedIn__icon">
              <a href="https://www.linkedin.com/in/amishadhikari/" target="_blank"><LinkedInIcon /></a>
            </div>
            <div className="Git__icon">
              <a href="https://github.com/mufcs?tab=repositories" target="_blank"><GitHubIcon /></a>
            </div>
            <div className="Download__icon">
              <button className="Resume__icon">
                Resume
              <a href="https://drive.google.com/file/d/1YfbEKo2towCZNF6daZhUJVsfvcebAiXS/view?usp=sharing" target="_blank"><GetAppIcon /></a>
              </button>
            </div>
            <div>
              <EmailIcon />
            </div>
          </div>
        </nav>
        <main
          className="col-6 col-sm-8 col-md-10 py-5"
          style={{ overflowX: "hidden", position: "relative" }}
        >
          <AnimatePresence>
            <Switch location={location} key={ location.pathname }>
              <Route exact path="/" component={ About } />
              <Route path="/myskills" component={ Myskills } />
              <Route path="/work" component={ Work } />
              <Route path="/contact" component={ Contact } />
              <Route component={ Unavailable } />
            </Switch>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}


export default App;
