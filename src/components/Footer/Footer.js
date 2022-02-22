import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__date">@2022</p>
        <nav>
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link link" target="_blank" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a className="footer__link link" target="_blank" href="https://github.com/BfeatB">Github</a>
            </li>
            <li className="footer__item">
              <a className="footer__link link" target="_blank" href="https://www.facebook.com/">Facebook</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;