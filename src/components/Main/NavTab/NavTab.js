import React from "react";

function NavTab(props) {
  return (
    <section className="nav">
      <nav>
        <ul className="nav__list">
          <li className="nav__item">
            <a className="link" href="/">О проекте</a>
          </li>
          <li className="nav__item">
             <a className="link" href="/">Технологии</a>
          </li>
          <li className="nav__item">
            <a className="link" href="/">Студент</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;