import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./css/navBar.css";
import MenuPopup from "../MenuPopup/MenuPopup";
import { gsap } from "gsap";
import resume from "./assets/justin-padilla-resume.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  dropShadow: {
    filter: "drop-shadow(0 3px 9px rgba(0, 0, 0, 0.404))",
  },
}));

function NavBar(props) {
  const classes = useStyles();

  let t1 = gsap.timeline({ delay: 0 });

  useEffect(() => {
    t1.from("#justinPadilla", {
      xPercent: -100,
      ease: "power3.easeOut",
      opacity: 0,
      delay: 0.2,
      duration: 1.2,
    })
      .from(".navBarBurgerMenu", {
        yPercent: 100,
        opacity: 0,
        ease: "power3.easeOut",
      })
      .from(
        ".resumeButton",
        {
          yPercent: 100,
          opacity: 0,
          ease: "power3.easeOut",
        },
        "<"
      );
  }, []);
  return (
    <div className={classes.root}>
      <AppBar position="static" style={props.style}>
        <Toolbar>
          <MenuPopup />
          <Typography variant="h6" className={classes.title} id="justinPadilla">
            Justin Padilla
          </Typography>
          <Button
            className="resumeButton"
            href={resume}
            download="justin-padilla-resume"
          >
            Download Resume
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
