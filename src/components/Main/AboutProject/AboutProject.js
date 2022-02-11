import React from "react";

function AboutProject(props) {
  return (
    <section className="project">
      <div className="project__title-container">
        <h2 className="project__title">О проекте</h2>
      </div>
      <article className="project__article">
        <h3 className="project__article-title">Дипломный проект включал 5 этапов</h3>
        <p className="project__article_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </article>
      <article className="project__article">
        <h3 className="project__article-title">На выполнение диплома ушло 5 недель</h3>
        <p className="project__article_text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </article>
        <div className="project__table">
          <p className="project__table-item project__table-item_blue">1 неделя</p>
          <p className="project__table-item project__table-item_grey">4 недели</p>
          <p className="project__table-item project__table-item_white">Back-end</p>
          <p className="project__table-item project__table-item_white">Front-end</p>
        </div>
    </section>
  );
}

export default AboutProject;