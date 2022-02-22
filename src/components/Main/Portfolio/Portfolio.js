import React from "react";
import arrow from "../../../images/arrow.svg";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link link" target="_blank" href="https://bfeatb.github.io/Wedding-gift/#">Статичный сайт
            <img className="portfolio__arrow" src={arrow} />
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link link" target="_blank" href="https://bfeatb.github.io/russian-travel/">Адаптивный сайт
            <img className="portfolio__arrow" src={arrow} /></a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link link" target="_blank" href="https://bfeatb.github.io/mesto/">Одностраничное приложение
            <img className="portfolio__arrow" src={arrow} /></a>

        </li>
      </ul>
    </section>
  );
}

export default Portfolio;