import React from "react";
import Work from './components/Work';
import About from './components/About';
import Myskills from './components/Myskills';
import Contact from './components/Contact';
import Unavailable from './components/Unavailable';
import { AnimatePresence } from "framer-motion";
import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
          <div className="links__socialmedia">
            <p>What is it</p>
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
