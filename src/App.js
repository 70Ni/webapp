import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";


import Clients from "./Section/Clients/Clients";
import Feedback from "./Section/Feedback/Feedback";
import Footer from "./Section/Footer/Footer";
import Capabilities from "./Section/Capabilities/Capabilities";
import Casestudy from "./Pages/Casestudy/Casestudy";
import CasePro from "./Pages/Cases/CasePro";
import Process from "./Pages/Process/Process";
import CaseBanner from "./Section/CaseStudy/CaseBanner";
import { NavLink as Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Land from "./Pages/Landing page/Land";

function App() {
  return (
    <div className="App">
      <div className="MainSec">
        <Router>
          <Routes>
            <Route exact path="/"  Component={<Land />} />
            <Route  path="/casestudy"  Component={<Casestudy />} />
            <Route  path="/casepro"  Component={<CasePro />} />
            <Route  path="/client"  Component={<Clients />} />
            <Route  path="/process"  Component={<Process />} />
          </Routes>
        </Router>
        {/* <Navigation /> */}
        {/* <IntoSec />
        <Brief />*/}
        {/* <Achieve />
        <Case />
        <Projects />
        <Capabilities />
        <CaseBanner />  */}
        {/* <Clients /> */}
        {/* <Feedback />*/}
        <Footer />  

        {/* <Casestudy />
        <Process /> */}
      </div>
    </div>
  );
}

export default App;
