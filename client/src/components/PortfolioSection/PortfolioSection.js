import React from "react";
import "./css/portfolioSection.css";
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
