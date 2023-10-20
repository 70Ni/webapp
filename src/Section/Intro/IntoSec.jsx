import React from "react";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "../../Section/Intro/IntoSec.css";
import Arrow from "../../Images/Svg/Arrow.svg";

function IntoSec() {
  return (
    <div>
      <div className="IntroWrapper">
        <div className="LeftInt">
          <div className="IntroTXT">We are growing Design Agency</div>
        </div>
        <div className="RightInt">
          <div className="IntrigtTop">
            Orioncruz is a dynamic and innovative digital agency dedicated to
            helping businesses thrive in the digital realm. With Passionate,
            cutting-edge technology, and a commitment to excellence, we've been
            at the forefront of digital marketing and web development.
          </div>
          <div className="IntrigtbotFlex">
            <img src={Arrow} alt="fireSpot" className="ImgArrow" />
            <div className="IntrRTtxt">
              We strive to <br /> innovate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntoSec;
