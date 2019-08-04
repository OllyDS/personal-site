import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CV from "./components/CV";
import Contact from "./components/Contact";
import OctopusWealthProject from "./components/molecules/OctopusWealthProject";

import "./App.css";

const App = () => {
  return (
    <div className="app-container">
    <Navbar />
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route exact={true} path="/cv/" component={CV} />
      <Route exact={true} path="/contact/" component={Contact} />
      <Route exact={true} path="/projects/octopus-wealth/" component={OctopusWealthProject} />
      {/* <Route exact={true} path="/projects/personal-projects/" component={SomeRandomComponent} /> */}
    </Switch>
    </div>
  );
};

export default App;
