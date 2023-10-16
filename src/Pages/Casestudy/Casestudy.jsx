import React from "react";
import { Button } from "rsuite";
import "../Casestudy/Casestudy.css";
import image from "../../Images/Img/Image.png";
import arrow from "../../Images/Svg/Arrowdark.svg";
import { useEffect } from "react";
import CaseBanner from "../../Section/CaseStudy/CaseBanner";
import Processbanner from "../../Section/ProcessBanner/Processbanner";
import FloatProjects from "../../Section/FloatProjects/FloatProjects";
import CaseCard from "./CaseCard";


function Casestudy() {
  useEffect(() => {
    function setTheme(themeName) {
      document.documentElement.className = themeName;
    }
    setTheme("theme-light");
  }, []);
  // function setTheme(themeName) {
  //   localStorage.setItem("theme", "theme-dark");
  //   document.documentElement.className = "theme-dark";
  // }
  return (
    <div className="casecover">
      <div className="caseintrowrapper">
        <div className="IntroTXT">We Design things that make things work</div>
        <div className="caseint-right">
          <img src={image} alt="" className="caseImg" />
          <div className="subtxt">
            We Design things that make things workWe Design things that make
            things workWe Design things that make things{" "}
          </div>
        </div>
      </div>
      <div className="casestHeder">
        <div className="Header">Case Studies</div>
        <img src={arrow} alt="" className="arrcasest" />
      </div>
      <div className="casesWrapper">
        <CaseCard />
        <CaseCard />
      </div>
      <div className="casesWrapperbelow">
        <CaseCard />
      </div>
      <Processbanner />
      <FloatProjects />
    </div>
  );
}

export default Casestudy;
