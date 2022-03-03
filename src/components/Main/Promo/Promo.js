import React from "react";
import backgroundImg from "../../../images/hero-img.svg";

function Promo(props) {
  return (
    <section className="hero">
        <img className="hero__img" src={backgroundImg} alt="логотип" />
        <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  );
}

export default Promo;