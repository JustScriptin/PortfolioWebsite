import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./css/navBar.css";
import MenuPopup from "../MenuPopup/MenuPopup";
import { gsap } from "gsap";

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

export default function NavBar() {
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
      <AppBar position="static">
        <Toolbar>
          <MenuPopup />
          <Typography variant="h6" className={classes.title} id="justinPadilla">
            Justin Padilla
          </Typography>
          <a
            href="https://mega.nz/file/918UkD4a#p9kUzb7ukkO_hsjZRXr5R9LwPR5Cki2H80z6gh_5KpI"
            className="navBarButtonLink"
          >
            <Button className="resumeButton">Download Resume</Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
