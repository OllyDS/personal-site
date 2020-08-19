import React from "react";
import { Switch, Route } from "react-router-dom";

import FourOFourPage from "./components/atoms/FourOFourPage";
import Contact from "./components/Contact";
import CV from "./components/CV";
import Home from "./components/Home";
import VoltaCapitalProject from "./components/molecules/VoltaCapitalProject";
import OctopusWealthProject from "./components/molecules/OctopusWealthProject";
import PersonalProjects from "./components/molecules/PersonalProjects";
import Navbar from "./components/Navbar";

import "./App.css";

const App = () => {
  return (
    <div className="app-container" id="top">
      <Navbar />
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/cv/" component={CV} />
        <Route exact={true} path="/contact/" component={Contact} />
        <Route exact={true} path="/volta-capital/" component={VoltaCapitalProject} />
        <Route exact={true} path="/octopus-wealth/" component={OctopusWealthProject} />
        <Route exact={true} path="/personal-projects/" component={PersonalProjects} />
        <Route component={FourOFourPage} />
      </Switch>
    </div>
  );
};

export default App;
