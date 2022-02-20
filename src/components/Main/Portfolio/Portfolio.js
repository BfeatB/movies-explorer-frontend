import React from "react";
import arrow from "../../../images/arrow.svg"
import { Link } from "react-router-dom";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link link" href="#">Статичный сайт
            <img className="portfolio__arrow" src={arrow} />
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link link" href="#">Адаптивный сайт
            <img className="portfolio__arrow" src={arrow} /></a>
        </li>
        <li className="portfolio__item">
          <Link className="portfolio__link link" to="/movies">Одностраничное приложение
            <img className="portfolio__arrow" src={arrow} /></Link>

        </li>
      </ul>
    </section>
  );
}

export default Portfolio;