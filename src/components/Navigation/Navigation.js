import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <>
      <nav className="header__nav">
        <ul className="header__list">
          <li><Link className="header__nav-link header__nav-link_active link" to="/movies">Фильмы</Link></li>
          <li><Link className="header__nav-link link" to="/saved-movies">Сохраненные фильмы</Link></li>
          <li><Link className="header__account link" to="/profile">Аккаунт</Link></li>
          <li><a className="header__menu-icon link"></a></li>
        </ul>
      </nav>
      <div className="nav-popup">
        <div className="nav-popup__container">
          <button type="button" className="nav-popup__close-btn"></button>
          <nav className="nav-popup__menu">
            <ul className="nav-popup__list">
              <li className="nav-popup__item"><Link className="nav-popup__link link" to="/">Главная</Link></li>
              <li className="nav-popup__item"><Link className="nav-popup__link nav-popup__link_active link" to="/movies">Фильмы</Link></li>
              <li className="nav-popup__item"><Link className="nav-popup__link link" to="/saved-movies">Сохраненные фильмы</Link></li>
              <li className="nav-popup__item"><Link className="nav-popup__account link" to="/profile">Аккаунт</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>

  );
}

export default Navigation;