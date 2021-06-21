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
} from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import cfbjj from "../DisplayCards/assets/cfbjj.png";
import cfbjjVid from "../DisplayCards/assets/cfbjjVid.mp4";
import PortfolioPageNavBar from "../PortfolioPageNavBar/PortfolioPageNavBar";

function CfbjjPage() {
  return (
    <div>
      <PortfolioPageNavBar />
      <PortfolioDescription
        projectHeading="Central Florida BJJ"
        videoPoster={cfbjj}
        video={cfbjjVid}
        liveSite="https://cfbjj.netlify.app"
        githubRepo="https://github.com/JustScriptin/CFBJJ"
        projectName="Central Florida Brazilian Jiu-Jitsu"
        projectDescription="This Is my most recent project made to highlight my how I put together a beautiful website from scratch for my friend’s business using a react application which boasts amazing load times, use of Instagrams basic display API, organization and reusability with over 20 components, aesthetic and consistent theme design as well as having excellent navigability."
        componentHeadings="Top 5 Intersting Components ~"
        componentName1="Instagram Gallery"
        componentLink1="https://github.com/JustScriptin/CFBJJ/blob/main/src/components/InstagramGallery/InstagramGallery.js"
        componentName2="Parallax Navigational Circles"
        componentLink2="https://github.com/JustScriptin/CFBJJ/blob/main/src/components/HeroAsideCircles/HeroAsideCircles.js"
        componentName3="Footer Up Arrow Animation"
        componentLink3="https://github.com/JustScriptin/CFBJJ/blob/main/src/components/Footer/css/footer.css"
        componentName4="Parallaxed Image Sections"
        componentLink4="https://github.com/JustScriptin/CFBJJ/blob/main/src/components/Hero/Hero.js"
        componentName5="Google Maps with Conditional Spinner Rendering"
        componentLink5="https://github.com/JustScriptin/CFBJJ/blob/main/src/components/Location/Location.js"
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
            <FaInstagramSquare /> Instagram Basic Display API
          </>
        }
        tools={
          <>
            <SiNetlify /> Netlify | <SiPostman /> Postman | <AiFillGithub />{" "}
            Github | <SiGnubash /> Git Bash Command-line |{" "}
            <SiVisualstudiocode /> Visual Studio Code | <SiGooglechrome />{" "}
            Chrome DevTools
          </>
        }
        paradigms={
          <>
            <IoCodeSlashSharp /> Functional Programming | <IoCodeSlashSharp />{" "}
            File Structures | <IoCodeSlashSharp /> Big O Notation |{" "}
            <IoCodeSlashSharp /> D.R.Y Code
          </>
        }
      />
      <Footer />
    </div>
  );
}

export default CfbjjPage;
