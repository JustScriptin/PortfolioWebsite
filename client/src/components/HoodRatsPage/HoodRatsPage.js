import React from "react";
import Footer from "../Footer/Footer";
import PortfolioDescription from "../PortfolioDescription/PortfolioDescription";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  IoLogoJavascript,
  IoIceCream,
  IoCodeSlashSharp,
} from "react-icons/io5";
import { SiGnubash, SiVisualstudiocode, SiGooglechrome } from "react-icons/si";
import hoodRats from "../DisplayCards/assets/hoodRats.png";
import hoodRatsVid from "../DisplayCards/assets/hoodRatsVid.mp4";
import PortfolioPageNavBar from "../PortfolioPageNavBar/PortfolioPageNavBar";

function HoodRatsPage() {
  return (
    <div>
      <PortfolioPageNavBar />
      <PortfolioDescription
        projectHeading="Hood Rats"
        videoPoster={hoodRats}
        video={hoodRatsVid}
        liveSite="https://justscriptin.github.io/Project-1/"
        githubRepo="https://github.com/JustScriptin/Project-1"
        projectName="Hood Rats Tug-of-War Desktop Game"
        projectDescription="Hood Rats is a 64-bit styled Tug-of-War minigame built on vanilla Javascript, Css and HTML5. Being used to React's virtual DOM using the normal DOM seems archaic with its multi-step processes and event handlers. The funnest part of this project was playing the game with my siblings."
        componentHeadings="Top 5 Intersting Lines of Code ~"
        componentName1="Displays a Countdown of the SetInterval Timer"
        componentLink1="https://github.com/JustScriptin/Project-1/blob/master/app.js#L23"
        componentName2="Triggers Page Reload to Play Again"
        componentLink2="https://github.com/JustScriptin/Project-1/blob/master/app.js#L79"
        componentName3="Sets Player's Win Condition | (one key press adds the other subtracts)"
        componentLink3="https://github.com/JustScriptin/Project-1/blob/master/app.js#L46"
        componentName4="Moves Rats a Percentage of the Page per Keyup Event"
        componentLink4="https://github.com/JustScriptin/Project-1/blob/master/app.js#L58"
        componentName5="Animations for the Winner Modal"
        componentLink5="https://github.com/JustScriptin/Project-1/blob/master/style.css#L132"
        languages={
          <>
            <AiFillHtml5 /> Html5 | <DiCss3 /> Css3 | <IoLogoJavascript />{" "}
            Javascript
          </>
        }
        frontend={
          <>
            <IoIceCream /> None / Vanilla
          </>
        }
        backend={
          <>
            <IoIceCream /> None / Vanilla
          </>
        }
        tools={
          <>
            <AiFillGithub /> Github | <SiGnubash /> Git Bash Command-line |{" "}
            <SiVisualstudiocode /> Visual Studio Code | <SiGooglechrome />{" "}
            Chrome DevTools
          </>
        }
        paradigms={
          <>
            <IoCodeSlashSharp /> Functional Programming
          </>
        }
      />
      <Footer />
    </div>
  );
}

export default HoodRatsPage;
