import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Post from "./components/Post/Post";
import Show from "./components/Show/Show";
import CfbjjPage from "./components/CfbjjPage/CfbjjPage";
import BabyBlanketsPage from "./components/BabyBlanketsPage/BabyBlanketsPage";
import BlubberBurgerPage from "./components/BlubberBurgerPage/BlubberBurgerPage";
import HoodRatsPage from "./components/HoodRatsPage/HoodRatsPage";
import TailWindPage from "./components/TailWindPage/TailWindPage";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/cfbjj" component={CfbjjPage} />
      <Route path="/babyblankets" component={BabyBlanketsPage} />
      <Route path="/blubberburger" component={BlubberBurgerPage} />
      <Route path="/hoodrats" component={HoodRatsPage} />
      <Route path="/tailwind" component={TailWindPage} />
      <Route path="/post" component={Post} />
      <Route path="/show" component={Show} />
    </>
  );
}

export default App;
