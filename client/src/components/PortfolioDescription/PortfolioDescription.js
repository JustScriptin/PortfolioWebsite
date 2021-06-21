import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BiWorld } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import { AiFillFolderOpen } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";

const useStyles = makeStyles((theme) => ({
  pageWrapper: {
    backgroundColor: "#283747",
  },
  pageHeading: {
    color: theme.palette.background.paper,
  },
  container: {
    backgroundColor: "#283747",
    padding: theme.spacing(4, 0, 2),
  },
  cardGrid: {
    padding: "20px 0 0 0",
    "&:nth-of-type(3)": {
      padding: "0 0 20px 0",
    },
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    //paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
    padding: "16px 16px 4px 16px",
  },
  projectDescription: {
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  emptyGrid: {},
  icons: {
    margin: "0 .35rem",
  },
  liveButton: {
    color: "white",
    backgroundColor: "#de354c",
    "&:hover": {
      backgroundColor: "#e35467",
    },
  },
  buttons: {
    // padding: "1.5rem 0",
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
  },
  smallCard: {
    height: "100%",
  },
}));

function PortfolioDescription(props) {
  const classes = useStyles();
  let repoStatus = false;
  const repoTrigger = () => {
    props.githubRepo ? (repoStatus = false) : (repoStatus = true);
  };

  return (
    <div className={classes.pageWrapper}>
      <CssBaseline />
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            className={classes.pageHeading}
            gutterBottom
          >
            {props.projectHeading}
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={5} md={4} className={classes.smallCard}>
            <Card className={classes.card} raised={true}>
              <CardMedia
                component="video"
                className={classes.cardMedia}
                poster={props.videoPoster}
                src={props.video}
                muted
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => (
                  event.target.pause(), event.target.load()
                )}
                onTouchStart={(event) => event.target.play()}
                onTouchEnd={(event) => (
                  event.target.pause(), event.target.load()
                )}
                loop
              />
              <CardActions className={classes.cardActions}>
                <Button
                  className={classes.liveButton}
                  size="large"
                  color="default"
                  fullWidth
                  variant="contained"
                  target="_blank"
                  href={props.liveSite}
                >
                  <BiWorld className={classes.icons} /> Live Site
                </Button>
                {repoTrigger()}
                <Button
                  disabled={repoStatus}
                  className={classes.buttons}
                  size="large"
                  color="default"
                  fullWidth
                  target="_blank"
                  href={props.githubRepo}
                >
                  <SiGithub className={classes.icons} /> GitHub Repo
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={7} md={8}>
            <Card className={classes.card} raised={false}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h4">
                  About This Project ~
                </Typography>
                <Typography gutterBottom variant="h6" color="textSecondary">
                  <AiFillFolderOpen className={classes.icons} />
                  {props.projectName}
                </Typography>
                <Typography gutterBottom variant="h4">
                  <FaQuoteLeft />
                </Typography>
                <Typography
                  paragraph
                  className={classes.projectDescription}
                  variant="h6"
                >
                  {props.projectDescription}
                </Typography>
                <Typography variant="button">
                  {props.componentHeadings}
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button
                  className={classes.buttons}
                  size="medium"
                  color="default"
                  style={{ justifyContent: "flex-start", marginLeft: ".5rem" }}
                  fullWidth
                  target="_blank"
                  href={props.componentLink1}
                >
                  <IoLogoWebComponent className={classes.icons} />{" "}
                  {props.componentName1}
                </Button>
                <Button
                  className={classes.buttons}
                  size="medium"
                  color="default"
                  style={{ justifyContent: "flex-start" }}
                  fullWidth
                  target="_blank"
                  href={props.componentLink2}
                >
                  <IoLogoWebComponent className={classes.icons} />{" "}
                  {props.componentName2}
                </Button>
                <Button
                  className={classes.buttons}
                  size="medium"
                  color="default"
                  style={{ justifyContent: "flex-start" }}
                  fullWidth
                  target="_blank"
                  href={props.componentLink3}
                >
                  <IoLogoWebComponent className={classes.icons} />{" "}
                  {props.componentName3}
                </Button>
                <Button
                  className={classes.buttons}
                  size="medium"
                  color="default"
                  style={{ justifyContent: "flex-start" }}
                  fullWidth
                  target="_blank"
                  href={props.componentLink4}
                >
                  <IoLogoWebComponent className={classes.icons} />{" "}
                  {props.componentName4}
                </Button>
                <Button
                  className={classes.buttons}
                  size="medium"
                  color="default"
                  style={{ justifyContent: "flex-start" }}
                  fullWidth
                  target="_blank"
                  href={props.componentLink5}
                >
                  <IoLogoWebComponent className={classes.icons} />{" "}
                  {props.componentName5}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={0} sm={5} md={4} className={classes.emptyGrid}></Grid>
          <Grid item xs={12} sm={7} md={8} alignContent="flex-end">
            <Card className={classes.card} raised={false}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" align="center">
                  Technologies ~
                </Typography>
                <Typography variant="body1" align="left">
                  Languages:
                </Typography>
                <Typography
                  paragraph
                  color="textSecondary"
                  variant="button"
                  align="left"
                >
                  {props.languages}
                </Typography>
                <Typography variant="body1" align="left">
                  Frontend Libraries:
                </Typography>
                <Typography
                  paragraph
                  color="textSecondary"
                  variant="button"
                  align="left"
                >
                  {props.frontend}
                </Typography>
                <Typography variant="body1" align="left">
                  Backend Libraries:
                </Typography>
                <Typography
                  paragraph
                  color="textSecondary"
                  variant="button"
                  align="left"
                >
                  {props.backend}
                </Typography>
                <Typography variant="body1" align="left">
                  Developer Tools:
                </Typography>
                <Typography
                  paragraph
                  color="textSecondary"
                  variant="button"
                  align="left"
                >
                  {props.tools}
                </Typography>
                <Typography variant="body1" align="left">
                  Programming Paradigms:
                </Typography>
                <Typography
                  paragraph
                  color="textSecondary"
                  variant="button"
                  align="left"
                >
                  {props.paradigms}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PortfolioDescription;
