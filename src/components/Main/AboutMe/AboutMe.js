import React from "react";
import MainTitle from "../MainTitle/MainTitle";
import avatar from "../../../images/avatar.png"

function AboutMe(props) {
  return (
    <section className="bio" id="student">
      <MainTitle title="Студент" />
      <article className="bio__article">
        <div className="bio__texts">
          <h3 className="bio__title">Виталий</h3>
          <p className="bio__description">Фронтенд-разработчик, 30 лет</p>
          <p className="bio__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс&#8209;заказами и ушёл с постоянной работы.</p>

        </div>
        <img className="bio__avatar" alt="портрет студента" src={avatar}></img>
        <ul className="bio__list">
          <li>
            <a className="bio__link link" target="_blank" href="https://twitter.com/bfeatb">Twitter</a>
          </li>
          <li>
            <a className="bio__link link" target="_blank" href="https://github.com/BfeatB">Github</a>
          </li>
        </ul>

      </article>
    </section>
  );
}

export default AboutMe;