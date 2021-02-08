import React from "react";
import "./css/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <p>Website made on feb 1, 2021 and being updated continuously.</p>
        <ul className="footerTxt">
          <a href="#">
            {" "}
            <li>About me</li>{" "}
          </a>
          <a href="#">
            <li>Portfolio</li>{" "}
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
