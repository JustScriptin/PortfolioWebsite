import React, { useState } from "react";
import "./css/displayCards.css";

function DisplayCards(props) {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState("moreInfo close");

  const handleToggle = () => {
    setOpen(!open);
    open ? setToggle("moreInfo close") : setToggle("moreInfo");
  };
  return (
    <div>
      <a href={props.link} className="displayCardImgLink">
        <img src={props.img} alt="" className="displayCardImg" />
      </a>
      <p className="displayCardHeading">{props.heading}</p>
      <div className="clickForMoreContainer">
        <p className="clickForMore" onClick={handleToggle}>
          (Click For More)
        </p>
      </div>
      <p className={toggle}>{props.description}</p>
    </div>
  );
}

export default DisplayCards;
