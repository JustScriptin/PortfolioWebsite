import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./Home";
import Post from "./components/Post/Post";
import Show from "./components/Show/Show";
import CfbjjPage from "./components/CfbjjPage/CfbjjPage";
import BabyBlanketsPage from "./components/BabyBlanketsPage/BabyBlanketsPage";
import BlubberBurgerPage from "./components/BlubberBurgerPage/BlubberBurgerPage";
import HoodRatsPage from "./components/HoodRatsPage/HoodRatsPage";
import TailWindPage from "./components/TailWindPage/TailWindPage";
import ReactGA from "react-ga";

const usePageViews = () => {
  let location = useLocation();

  useEffect(() => {
    ReactGA.initialize("UA-109161538-2");
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

function App() {
  usePageViews();
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cfbjj" component={CfbjjPage} />
        <Route path="/babyblankets" component={BabyBlanketsPage} />
        <Route path="/blubberburger" component={BlubberBurgerPage} />
        <Route path="/hoodrats" component={HoodRatsPage} />
        <Route path="/tailwind" component={TailWindPage} />
        <Route path="/post" component={Post} />
        <Route path="/show" component={Show} />
      </Switch>
    </>
  );
}

export default App;
