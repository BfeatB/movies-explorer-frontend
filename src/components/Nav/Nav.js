import React from "react";

function Nav(props) {
  return (
      <nav className="header__nav">
        <a className="header__nav-link header__nav-link_active link">Фильмы</a>
        <a className="header__nav-link link">Сохраненные фильмы</a>
        <a className="header__account link">Аккаунт</a>
        <a className="header__menu-icon link"></a>
      </nav>
  );
}

export default Nav;