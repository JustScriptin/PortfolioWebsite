import React from "react";
import Footer from "../Footer/Footer";
import PortfolioDescription from "../PortfolioDescription/PortfolioDescription";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoCodeSlashSharp,
} from "react-icons/io5";
import {
  SiMaterialUi,
  SiNetlify,
  SiPostman,
  SiGnubash,
  SiVisualstudiocode,
  SiGooglechrome,
  SiMongodb,
  SiNodeDotJs,
  SiHeroku,
} from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import blubberBurger from "../DisplayCards/assets/blubberBurger.png";
import blubberBurgerVid from "../DisplayCards/assets/blubberBurgerVid.mp4";
import PortfolioPageNavBar from "../PortfolioPageNavBar/PortfolioPageNavBar";

function BlubberBurgerPage() {
  return (
    <div>
      <PortfolioPageNavBar />
      <PortfolioDescription
        projectHeading="Blubber Burger"
        videoPoster={blubberBurger}
        video={blubberBurgerVid}
        liveSite="https://nameless-plateau-69958.herokuapp.com/menu"
        githubRepo="https://github.com/JustScriptin/MenuP2"
        projectName="Imaginary Food Chain Blubber Burger"
        projectDescription="A website using MongoDB and Express (NodeJs) to build a working backend. You can add and remove items to the menu. Next step for this project is to make a more robust UI. The burger images and prices are pulled from a MongoDB database and your orders are saved there aswell."
        componentHeadings="Top 5 Intersting Project Aspects ~"
        componentName1="Cart Controller"
        componentLink1="https://github.com/JustScriptin/MenuP2/blob/main/server-side/controllers/cartController.js"
        componentName2="Burger Model"
        componentLink2="https://github.com/JustScriptin/MenuP2/blob/main/server-side/models/burgerModel.js"
        componentName3="RESTful Routes"
        componentLink3="https://github.com/JustScriptin/MenuP2/tree/main/server-side/routes"
        componentName4="Planned | Filter Menu Items In Database"
        componentLink4="https://nameless-plateau-69958.herokuapp.com/menu"
        componentName5="Planned | Graphical Revamp"
        componentLink5="https://nameless-plateau-69958.herokuapp.com/menu"
        languages={
          <>
            <AiFillHtml5 /> Html5 | <DiCss3 /> Css3 | <IoLogoJavascript />{" "}
            Javascript
          </>
        }
        frontend={
          <>
            <IoLogoReact /> React.js | <SiMaterialUi /> Material-UI
          </>
        }
        backend={
          <>
            <SiMongodb /> MongoDB | <SiNodeDotJs /> Node.js
          </>
        }
        tools={
          <>
            <SiHeroku /> Heroku | <SiPostman /> Postman | <AiFillGithub />{" "}
            Github | <SiGnubash /> Git Bash Command-line |{" "}
            <SiVisualstudiocode /> Visual Studio Code | <SiGooglechrome />{" "}
            Chrome DevTools
          </>
        }
        paradigms={
          <>
            <IoCodeSlashSharp /> Functional Programming | <IoCodeSlashSharp />{" "}
            Data Structures | <IoCodeSlashSharp /> MVC Design Pattern |{" "}
            <IoCodeSlashSharp /> RESTful API
          </>
        }
      />
      <Footer />
    </div>
  );
}

export default BlubberBurgerPage;
