import React from "react";

function ErrorModal(props) {
  return (
    <section className="error-page">
      <h2 className="error-page__title">404</h2>
      <p className="error-page__description">Страница не найдена</p>
      <a className="error-page__back-link link" href="#">Назад</a>
    </section>
  );
}

export default ErrorModal;