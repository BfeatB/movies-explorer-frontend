import React from "react";
import logo from "../../images/logo.svg";


function Register(props) {
  return (
    <main className="auth">
      <div className="auth__wrapper">
        <a className="auth__logo-link link"><img src={logo} alt="logo"></img></a>
        <h1 className="auth__title">{props.title}</h1>
        <form className="auth__form">
            <label className="auth__label">Имя
            </label>
            <input className="auth__field" type="text" placeholder="Введите имя"></input>
            <label className="auth__label">E-mail
            </label>
            <input className="auth__field" type="email" placeholder="Введите e-mail"></input>
            <label className="auth__label">Пароль
            </label>
            <input className="auth__field" type="password" placeholder="Введите пароль"></input>
            <button className="auth__button button">Зарегистрироваться</button>
            <p className="auth__signin">Уже зарегистрированы? <a className="auth__signin-link link">Войти</a></p>
        </form>
      </div>
    </main>
  );
}

export default Register;