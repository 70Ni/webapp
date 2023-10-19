import React from "react";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "../../Section/Intro/IntoSec.css";
import Arrow from "../../Images/Svg/Arrow.svg";
import { useEffect } from "react";

function IntoSec() {

  return (
    <div>
      <div className="IntroWrapper">
        <div className="LeftInt">
          <div className="IntroTXT">We Design things that make things work</div>
        </div>
        <div className="RightInt">
          <div className="IntrigtTop">
          nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.nly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </div>
          <div className="IntrigtbotFlex">
            <img src={Arrow} alt="fireSpot" className="ImgArrow" />
            <div className="IntrRTtxt">We strive to <br/> innovate</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntoSec;
