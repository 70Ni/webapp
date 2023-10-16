import React from "react";
import { Button } from "rsuite";
import '../Casestudy/Casestudy.css'
import image from '../../Images/Img/Image.png'

function Casestudy() {
  return (
    <div className="casecover">
      <div className="IntroTXT">We Design things that make things work</div>
      <div className="Header">
      Recent Case studies
      </div>
      <div className="casesWrapper">
        <div className="casewrapper">
            <div className="img">
              <img src={image} className="caseimage" alt="case-image" />
            </div>
            <div className="Header">Web page</div>
            <div className="para">evenly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            <Button>Hlel</Button>
        </div>
        <div className="casewrapper">
            <div className="img">
              <img src={image} className="caseimage" alt="case-image" />
            </div>
            <div className="Header">Web page</div>
            <div className="para">evenly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            <Button>Hlel</Button>
        </div>
      </div>
      <div className="casesWrapperbelow">
        <div className="casewrapper">
            <div className="img">
              <img src={image} className="caseimage" alt="case-image" />
            </div>
            <div className="Header">Web page</div>
            <div className="para">evenly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            <Button>Hlel</Button>
        </div>
      </div>
    </div>
  );
}

export default Casestudy;
