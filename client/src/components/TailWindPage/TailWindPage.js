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
  SiTailwindcss,
  SiMongodb,
  SiNodeDotJs,
  SiHeroku,
} from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import tailWindSite from "../DisplayCards/assets/tailWindSite.png";
import tailWindSiteVid from "../DisplayCards/assets/tailWindSiteVid.mp4";
import PortfolioPageNavBar from "../PortfolioPageNavBar/PortfolioPageNavBar";

function TailWindPage() {
  return (
    <div>
      <PortfolioPageNavBar />
      <PortfolioDescription
        projectHeading="E-commerce Shop"
        videoPoster={tailWindSite}
        video={tailWindSiteVid}
        liveSite="https://justins-ecommerce1.herokuapp.com/"
        githubRepo="https://github.com/JustScriptin/ecommerce1"
        projectName="E-Commerce Shop Styled with Tailwind CSS"
        projectDescription="I was challenged to make a full-stack application in 3 days and I had to learn something new so I chose to learn Tailwind CSS a frontend CSS library. It was very similar to Bootstrap in the way that you had inline styles applied on the className. Overall it was an interesting experience though I found it to lack customizability compared to vanilla CSS3"
        componentHeadings="Top 5 Intersting Components ~"
        componentName1="Shop All Section CRUD Route"
        componentLink1="https://github.com/JustScriptin/ecommerce1/blob/main/server/controllers/shopAllRouter.js"
        componentName2="Shop All Section Schema"
        componentLink2="https://github.com/JustScriptin/CFBJJ/blob/main/src/components/HeroAsideCircles/HeroAsideCircles.js"
        componentName3="Home Page API Call"
        componentLink3="https://github.com/JustScriptin/ecommerce1/blob/main/client/src/components/Home/Home.js"
        componentName4="Used Craco to Build Instead react-scripts"
        componentLink4="https://github.com/JustScriptin/ecommerce1/blob/main/client/package.json"
        componentName5="Sticky Social Media Bar"
        componentLink5="https://github.com/JustScriptin/ecommerce1/blob/main/client/src/components/StickySocials/StickySocials.js"
        languages={
          <>
            <AiFillHtml5 /> Html5 | <IoLogoJavascript /> Javascript
          </>
        }
        frontend={
          <>
            <IoLogoReact /> React.js | <SiTailwindcss /> Tailwind CSS
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

export default TailWindPage;
