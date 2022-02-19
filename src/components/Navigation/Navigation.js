import React from "react";

function Navigation(props) {
  return (
    <>
      <nav className="header__nav">
        <ul className="header__list">
          <li><a className="header__nav-link header__nav-link_active link">Фильмы</a></li>
          <li><a className="header__nav-link link">Сохраненные фильмы</a></li>
          <li><a className="header__account link">Аккаунт</a></li>
          <li><a className="header__menu-icon link"></a></li>
        </ul>
      </nav>
      <div className="nav-popup">
        <div className="nav-popup__container">
          <button type="button" className="nav-popup__close-btn"></button>
          <nav className="nav-popup__menu">
            <ul className="nav-popup__list">
              <li className="nav-popup__item"><a className="nav-popup__link link">Главная</a></li>
              <li className="nav-popup__item"><a className="nav-popup__link nav-popup__link_active link">Фильмы</a></li>
              <li className="nav-popup__item"><a className="nav-popup__link link">Сохраненные фильмы</a></li>
              <li className="nav-popup__item"><a className="nav-popup__account link">Аккаунт</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </>

  );
}

export default Navigation;