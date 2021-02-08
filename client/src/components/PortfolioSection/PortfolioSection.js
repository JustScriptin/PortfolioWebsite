import React, { useState } from "react";
import "./css/portfolioSection.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";

function PortfolioSection() {
  const [currentMoreInfoClass, setCurrentMoreInfoClass] = useState(
    "moreInfo hidden"
  );

  const handleHideText = () => {
    setCurrentMoreInfoClass(
      currentMoreInfoClass === "moreInfo hidden"
        ? setCurrentMoreInfoClass("moreInfo")
        : setCurrentMoreInfoClass("moreInfo hidden")
    );
  };
  return (
    <a id="portfolioSection">
      <div className="portfolioContainer">
        <div>
          <a href="#" className="portfolioSectionATags">
            <img src={img1} alt="" className="portimg" />
          </a>
          <p>Hood Rats</p>
          <p className={"clickForMore"} onClick={handleHideText}>
            (Click For More)
          </p>
          <p className={currentMoreInfoClass} onClick={handleHideText}>
            Hood Rats is a Tug-of-War browser based game written in Javascript,
            Css and HTML. I practiced DOM manipulation, recursion and UI/UX
            design.
          </p>
        </div>

        <div>
          <a href="#" className="portfolioSectionATags">
            <img src={img2} alt="" className="portimg" />
          </a>
          <p>Blubber Burger</p>
          <p className="clickForMore">(Click For More)</p>
        </div>

        <div>
          <a href="#" className="portfolioSectionATags">
            <img src={img3} alt="" className="portimg" />
          </a>
          <p>Portfolio Website</p>
          <p className="clickForMore">(Click For More)</p>
        </div>
      </div>
    </a>
  );
}

export default PortfolioSection;
