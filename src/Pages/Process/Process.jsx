import React from "react";
import { useEffect } from "react";
import image from "../../Images/Img/Image.png";
import CaseBannerL from "../../Section/CaseStudyBanner/CaseBannerL";
import CaseCard from "../Casestudy/CaseCard";
import "../Process/process.css";


function Process() {
  useEffect(() => {
    function setTheme(themeName) {
      document.documentElement.className = themeName;
    }
    setTheme("theme-light");
  }, []);
  return (
    <div className="Process-overlay">
      <div className="processwrapper">
        <div class="img">
          <img src={image} class="proceshedrImg" alt="case-image" />
        </div>
        <div className="IntroTXT">Our Design Process</div>
        <div className="procSection">
          <div className="proctext">
            <div className="Header">Design Visual Elements</div>
            <div className="para">
              evenly five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </div>
          </div>
          <div className="procImage">
            <img src={image} alt="" className="processImage" />
          </div>
        </div>
        <div className="procSection">
          <div className="procImage">
            <img src={image} alt="" className="processImage" />
          </div>
          <div className="proctext">
            <div className="Header">Design Visual Elements</div>
            <div className="para">
              evenly five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </div>
          </div>
        </div>
        <div className="procSection">
          <div className="proctext">
            <div className="Header">Design Visual Elements</div>
            <div className="para">
              evenly five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </div>
          </div>
          <div className="procImage">
            <img src={image} alt="" className="processImage" />
          </div>
        </div>
      </div>
      <CaseBannerL />
    </div>
  );
}

export default Process;
