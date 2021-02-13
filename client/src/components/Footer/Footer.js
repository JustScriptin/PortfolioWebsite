import React from "react";
import "./css/footer.css";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function Footer() {
  const handleScroll = (event) => {
    event === "portfolioContainer"
      ? gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: ".portfolioContainer",
            offsetY: 150,
          },
        })
      : gsap.to(window, {
          duration: 1,
          scrollTo: ".aboutMe",
        });
  };

  return (
    <>
      <footer className="footer">
        <p>Website made on feb 1, 2021 and being updated continuously.</p>
        <ul className="footerTxt">
          <a href="#">
            {" "}
            <li onClick={() => handleScroll("aboutMe")}>About me</li>{" "}
          </a>
          <a href="#">
            <li onClick={() => handleScroll("portfolioContainer")}>
              Portfolio
            </li>{" "}
          </a>
          <a href="#">
            <li>Contact me</li>{" "}
          </a>
        </ul>
        <p>
          Justin's Portfolio. Thank you for your consideration, I'll be looking
          forward to our cooperation
        </p>
      </footer>
    </>
  );
}

export default Footer;
