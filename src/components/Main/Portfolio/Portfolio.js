import React from "react";
import arrow from "../../../images/arrow.svg"

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="#">Статичный сайт</a>
          <img className="portfolio__arrow" src={arrow} />
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link"href="#">Адаптивный сайт</a>
          <img className="portfolio__arrow" src={arrow} />
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link"href="#">Одностраничное приложение</a>
          <img className="portfolio__arrow" src={arrow} />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;