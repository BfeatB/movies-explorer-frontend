import React from "react";

function NavTab(props) {
  return (
    <section className="nav">
      <nav>
        <ul className="nav__list">
          <li className="nav__item">О проекте</li>
          <li className="nav__item">Технологии</li>
          <li className="nav__item">Студент</li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;