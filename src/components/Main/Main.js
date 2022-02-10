import React from "react";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import Portfolio from "./Portfolio/Portfolio";
import Techs from "./Techs/Techs";

function Main(props) {
  return (
    <main className="main">
      <Promo></Promo>
      <NavTab></NavTab>
      <AboutProject></AboutProject>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Techs></Techs>
    </main>
  );
}

export default Main;