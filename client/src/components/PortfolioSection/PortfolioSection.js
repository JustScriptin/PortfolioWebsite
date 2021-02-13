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
      <DisplayCards
        img={img1}
        link="https://github.com/JustScriptin/Project-1.git"
        heading="Hood Rats"
        description="Hood Rats is a Tug-of-War browser based game written in Javascript,
          Css and HTML. I practiced DOM manipulation and recursion.
          design. (It is not responsive and only playable on desktop.)"
      />
      <DisplayCards
        img={img2}
        link="https://github.com/JustScriptin/PortfolioWebsite.git"
        heading="Portfolio Website"
        description="My website is made using React and its hosted using Heroku. It demonstrates the ability to use props as seen in these card components as well as demostrating a mastery of responsive UI/UX design, functional components, useState hook and basic understanding of typography."
      />
      <DisplayCards
        img={img3}
        link="https://github.com/JustScriptin/Project-2.git"
        heading="Blubber Burger"
        description="Blubber Burger was made to show off my knowledge in back-end development using Express and MongoDB as well as my experience using and styling materialUI components. This RESTful app contains fully functional CRUD routes as displayed on the menu section."
      />
    </div>
  );
}

export default PortfolioSection;
