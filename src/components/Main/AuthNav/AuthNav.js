import React from "react";

function AuthNav(props) {
  return (
      <nav className="header__nav">
        <a className="header__auth link">Регистрация</a>
        <a className="header__auth header__auth_active link">Войти</a>
      </nav>
  );
}

export default AuthNav;