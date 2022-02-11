import React from "react";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title"></h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="#"></a>
        </li>
        <li className="portfolio__item" href="#">
          <a className="portfolio__link"></a>
        </li>
        <li className="portfolio__item" href="#">
          <a className="portfolio__link"></a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;