import React from "react";
import { Link } from "react-router-dom";

function AuthNav(props) {
  return (
    <nav className="header__nav">
      <Link className="header__auth link" to="/signup">Регистрация</Link>
      <Link className="header__auth header__auth_active link" to="/signin">Войти</Link>
    </nav>
  );
}

export default AuthNav;