import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={`header header_${props.mod}`}>
      <Link className="link" to="/">
        <img className="header__logo" src={logo} alt="логотип" />
      </Link>
      {props.children}
    </header>
  );
}

export default Header;