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
              <a className="footer__link" href="#">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Github</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Facebook</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;