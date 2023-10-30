import React from "react";
import "../Casestudy/Casestudy.css";
import arrow from "../../Images/Svg/Arrowdark.svg";
import image from "../../Images/Img/Image.png";
import Img from '../../Images/Img/xbox/Xb01.png'

function CaseCard() {
  return (
    <div>
      <div className="casewrapper">
        <div className="img">
          <img src={Img} className="caseimage" alt="case-image" />
        </div>
        <div className="Header">Web page</div>
        <div className="para casePara">
          evenly five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className="linktoCase storyheader">
          Check the workflow
          <img src={arrow} alt="" className="linkarrow" />
        </div>
      </div>
    </div>
  );
}

export default CaseCard;
