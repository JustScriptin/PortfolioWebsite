import React from "react";
import Footer from "../Footer/Footer";
import PortfolioDescription from "../PortfolioDescription/PortfolioDescription";
import { AiFillHtml5, AiFillCode } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoCodeSlashSharp } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import {
  SiGooglechrome,
  SiWoocommerce,
  SiWordpress,
  SiGoogleads,
  SiFacebook,
} from "react-icons/si";
import { FaElementor } from "react-icons/fa";
import babyBlankets from "../DisplayCards/assets/babyBlankets.png";
import babyBlanketsVid from "../DisplayCards/assets/babyBlanketsVid.mp4";
import PortfolioPageNavBar from "../PortfolioPageNavBar/PortfolioPageNavBar";

function BabyBlanketsPage() {
  return (
    <div>
      <PortfolioPageNavBar />
      <PortfolioDescription
        projectHeading="Baby Milestone Blanket"
        videoPoster={babyBlankets}
        video={babyBlanketsVid}
        liveSite="https://junglemilestoneblanket.com/"
        //githubRepo="https://github.com/JustScriptin/CFBJJ"
        projectName="Baby Milestone Blanket Wordpress Build"
        projectDescription="This is one of my inactive E-commerce sites I built using a CMS called Wordpress with the plugins Elementor and CartFlows and WooCommerce (small tweaks with HTML5 and CSS3). It takes Stripe and Paypal as payment. I made this page with speed, consumer psychology and single page design in mind. I needed a website to be up quickly while still being able to convert visitors to customers so I opted to build it using wordpress over shopify because it allows me more flexiblity."
        componentHeadings="Top 5 Intersting Project Aspects ~"
        componentName1="Timer that Counted Down Till End of Sale"
        componentLink1="https://junglemilestoneblanket.com/"
        componentName2="Facebook Tracking Pixel | Test with Facebook Pixel Helper Extension"
        componentLink2="https://junglemilestoneblanket.com/"
        componentName3="Intergrated Stripe and Paypal as Payment Methods"
        componentLink3="https://junglemilestoneblanket.com/checkout/"
        componentName4="Consistent and complimentary Color Scheme"
        componentLink4="https://junglemilestoneblanket.com/"
        componentName5="Intutive Hierarchical UI Design"
        componentLink5="https://junglemilestoneblanket.com/"
        languages={
          <>
            <AiFillHtml5 /> Html5 | <DiCss3 /> Css3
          </>
        }
        frontend={
          <>
            <SiWoocommerce /> WooCommerce | <FaElementor /> Elementor |{" "}
            <IoMdCart /> CartFlows | <SiWordpress /> Wordpress
          </>
        }
        backend={
          <>
            <AiFillCode /> Host Gator
          </>
        }
        tools={
          <>
            <SiGooglechrome /> Chrome DevTools | <SiGoogleads /> Google ads
            Tracker | <SiFacebook /> Facebook ads Pixel
          </>
        }
        paradigms={
          <>
            <IoCodeSlashSharp /> Intuitive Design
          </>
        }
      />
      <Footer />
    </div>
  );
}

export default BabyBlanketsPage;
