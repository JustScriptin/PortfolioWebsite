import React from "react";
import "./css/aboutMeSection.css";
import img1 from "./assets/img1.png";

function AboutMeSection() {
  return (
    <>
      <div className="aboutMe" id="aboutMeSectionAnchor">
        <div className="image">
          <img src={img1} alt="" />
        </div>
        <h2 className="heading"> About Me </h2>
        <p className="paragraph">
          A level-headed software engineer with a knack for conquering the
          unknown with a positive and childlike optimism. I'm proficient in the
          MERN stack in addition too Ruby, Git, Vscode, Heroku, OOP JavaScript,
          CSS, HTML aswell as basic algorithms, data structures and industry
          best practices. Outside of full-stack development I enjoy spending my
          time at the gym practicing Brazilian Jiu Jitsu as I have been for the
          past 6 years and learning business strategies that could one day help
          me build my own. I've dabbled in the Amazon Marketplace as well as
          drop shipping and wholesale using Shopify as my ecommerce platform and
          Facebook and Google ads for my marketing. These are just a few things
          that have piqued my interest in the past few years and I hope to
          continue to venture the unknown in search of novelty and my expansion
          of knowledge to guide me into a bigger better and brighter future.
        </p>
      </div>
    </>
  );
}

export default AboutMeSection;
