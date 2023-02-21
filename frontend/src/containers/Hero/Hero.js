import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./Hero.scss";

function Hero() {
  return <h1 id='home'>Hero</h1>;
}

export default Wrapper(Hero, "home");
