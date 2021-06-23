import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { IoMdArrowBack } from "react-icons/io";
import { gsap } from "gsap";
import resume from "../NavBar/assets/justin-padilla-resume.pdf";
import ReactGA from "react-ga";

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
}));

function PortfolioPageNavBar() {
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
      <AppBar
        position="static"
        style={{ filter: "drop-shadow(0 3px 9px rgba(0, 0, 0, 0.404" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className="navBarBurgerMenu"
            color="inherit"
            aria-label="menu"
            href="/"
          >
            <IoMdArrowBack />
          </IconButton>
          <Typography variant="h6" className={classes.title} id="justinPadilla">
            Justin Padilla
          </Typography>
          <Button
            className="resumeButton"
            href={resume}
            download="justin-padilla-resume"
            onClick={() => {
              ReactGA.event({
                category: "Button",
                action: "Download Resume from Portfolio Page",
              });
            }}
          >
            Download Resume
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default PortfolioPageNavBar;
