import React from "react";
import logo from "../../images/logo.svg";

function Header(props) {
  return (
    <header className={`header header_${props.mod}`}>
      <a className="link" href="/">
        <img className="header__logo" src={logo} alt="логотип" />
      </a>
      {props.children}
    </header>
  );
}

export default Header;