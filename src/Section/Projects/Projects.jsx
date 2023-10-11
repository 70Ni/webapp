import React from "react";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import ima from "../../Images/Img/Image.png";
import rightarrw from "../../Images/Svg/Right.svg"
import "../Projects/Projects.css";
function Projects() {
  return (
    <div className="outer-projects">
      <div className="Header">Projects</div>
      <div className="projectSelector">
        <div className="seleccover">
          {/* <img src={ima} alt="" className="Selector" /> */}
          <Button className="Header selectTxt">UI/UX</Button>
          <Button className="Header selectTxt">Landing page</Button>
          <Button className="Header selectTxt">UI/UX</Button>
        </div>
      </div>
      <div className="SwipSection">
        <div className="PrjectBox">
          <img src={ima} alt="img" className="img-project" />
          <img src={ima} alt="img" className="img-project" />
          <img src={ima} alt="img" className="img-project" />
        </div>
      </div>
      <div className="linkContainer">
        <div className="IntrigtTop moreLink">Check more</div>
        <img src={rightarrw} alt="arrow" className="aright"/>
      </div>
    </div>
  );
}

export default Projects;
