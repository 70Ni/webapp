import React from "react";
import { useEffect } from "react";
import Processbanner from "../../Section/ProcessBanner/Processbanner";
import "../Cases/casepro.css";
import Logo from "../../Images/Img/Deolittle.png";
import image from "../../Images/Img/Image.png";
import CaseCard from "../Casestudy/CaseCard";
import arrow from "../../Images/Svg/Arrowdark.svg";

function CasePro() {
  useEffect(() => {
    function setTheme(themeName) {
      document.documentElement.className = themeName;
    }
    setTheme("theme-light");
  }, []);

  return (
    <div className="case-outer">
      <div className="casewrapper">
        <div className="Caseintro">
          <div className="Logo">
            <img src={Logo} alt="logo" />
            <div className="para">Todo Applicaton</div>
          </div>
          <div className="subtxt caseintrotxt">
            evenly five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </div>
        </div>
        <div>
          {/* <div className="caseimgwrpr">
            <div className="caseintImg">
              <img src={image} alt="caseStudyImage" className="caseBannerimg" />
            </div>
          </div> */}
        </div>
        <div className="casedetails">
          <div className="casedatawrper">
            <div className="casedeta">
              <div className="Header">About Tilda</div>
              <div className="subtxt">
                evenly five centuries, but also the leap into electronic
                typesetting
              </div>
              <div className="linktoCase storyheader caseprolink">
                Check the workflow
                <img src={arrow} alt="" className="linkarrow" />
              </div>
            </div>
            <div className="casemeta">
              <div className="casemetwrper">
                <div className="caseSection">Service</div>
                <div className="casepara">
                  evenly five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
              <div className="casemetwrper">
                <div className="caseSection">Service</div>
                <div className="casepara">
                  evenly five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged.
                </div>
              </div>
              <div className="casemetwrper">
                <div className="caseSection">Service</div>
                <div className="casepara">
                  evenly five centuries, but also the leap into electronic
                  typesetting, remaininevenly five centuries, but also the leap
                  into electronic typesettingg essentialevenly five centuries,
                  but also the leap into electronic typesettingly unchanged.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Globalgidelinewrapper">
          <div className="Header guideHeader">Guideline</div>
          <div className="globcolors">
            <div className="subtxt">Color Theory</div>
            <div className="globdatawrper">
              <div className="globTypowrpr">
                <div className="color-circ"></div>
                <div className="colorname">Inter</div>
              </div>
              <div className="globTypowrpr">
                <div className="color-circ"></div>
                <div className="colorname">Inter</div>
              </div>
              <div className="globTypowrpr">
                <div className="color-circ"></div>
                <div className="colorname">Inter</div>
              </div>
            </div>
          </div>
          <div className="glofontwrper">
            <div className="subtxt">Typrography</div>
            <div className="globdatawrper">
              <div className="globTypowrpr">
                <div className="font-prim">Aa</div>
                <div className="fontname">Inter</div>
              </div>
              <div className="globTypowrpr">
                <div className="font-prim">Aa</div>
                <div className="fontname">Inter</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Imagery">
          <div className="singlecolumn">
            <img src={image} alt="" className="tworatio" />
          </div>
          <div className="twocoloumlayout">
          <div className="item">
              <img src={image} alt="" className="oneratio" />
            </div>  <div className="item">
              <img src={image} alt="" className="oneratio" />
            </div>
          </div>
          <div className="two1and2ratio">
          <div className="item flexone">
              <img src={image} alt="" className="tworatio" />
            </div>  <div className="item flextwo">
              <img src={image} alt="" className="tworatio" />
            </div>
          </div>
        </div>
     
        <div className="Header">Other Case Studies</div>
        <div className="processsecwrapper">
          <CaseCard />
          <CaseCard />
          <CaseCard />
        </div> 
      </div>
      <Processbanner />
    </div>
  );
}

export default CasePro;
