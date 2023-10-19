import React from "react";
import { useEffect } from "react";
import Achieve from "../../Section/Achievements/Achieve";
import Brief from "../../Section/Brief/Brief";
import Capabilities from "../../Section/Capabilities/Capabilities";

import IntoSec from "../../Section/Intro/IntoSec";
import Projects from "../../Section/Projects/Projects";
import Casestudy from "../Casestudy/Casestudy";

function Land() {
  useEffect(() => {
    function setTheme(themeName) {
      document.documentElement.className = themeName;
    }
    setTheme("theme-dark");
  }, []);
  return (
    <div className="landwrapper">
      <IntoSec />
      <Brief />
      <Achieve />
      {/* <Projects /> */}
      {/* <CaseBanner /> */}
      <Capabilities />
      {/* <Clients /> */}
      {/* <Feedback /> */}
    </div>
  );
}

export default Land;
