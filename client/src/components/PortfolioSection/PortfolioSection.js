import React, { useState } from "react";
import "./css/portfolioSection.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import DisplayCards from "../DisplayCards/DisplayCards";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function PortfolioSection() {
  return (
    <div className="portfolioContainer">
      <DisplayCards />
    </div>
  );
}

export default PortfolioSection;
