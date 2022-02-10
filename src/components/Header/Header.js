import React from "react";
import logo from "../../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <a className="link" href="/">
        <img className="header__logo" src={logo} alt="логотип" />
      </a>
      <nav className="header__nav">
        <a className="header__auth link">Регистрация</a>
        <a className="header__auth header__auth_active link">Войти</a>
      </nav>
    </header>
  );
}

export default Header;