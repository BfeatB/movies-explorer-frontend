import React from "react";
import logo from "../../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <a href="/">
        <img className="header__logo" src={logo} alt="логотип" />
      </a>
      <nav className="header__nav">
        <a className="header__auth">Регистрация</a>
        <a className="header__auth header__auth_active">Войти</a>
      </nav>
    </header>
  );
}

export default Header;