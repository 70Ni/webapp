import React from "react";
import image from '../../Images/Img/Image.png'
import '../Process/process.css'
function Process() {
  return (
    <div className="Process-overlay">
      <div className="processwrapper">
        <div className="procSection">
          <div className="proctext">
            <div className="Header">Design Visual Elements</div>
            <div className="para">evenly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          </div>
          <div className="procImage">
            <img src={image} alt="" className="processImage"/>
          </div>
        </div>
        <div className="procSection">
          <div className="procImage">
            <img src={image} alt="" className="processImage"/>
          </div>
          <div className="proctext">
            <div className="Header">Design Visual Elements</div>
            <div className="para">evenly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          </div>
        </div>
        <div className="procSection">
          <div className="proctext">
            <div className="Header">Design Visual Elements</div>
            <div className="para">evenly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
          </div>
          <div className="procImage">
            <img src={image} alt="" className="processImage"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
