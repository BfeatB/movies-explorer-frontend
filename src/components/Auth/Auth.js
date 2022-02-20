import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";


function Auth(props) {
  return (
    <main className="auth">
      <div className="auth__wrapper">
        <Link className="auth__logo-link link" to="/"><img src={logo} alt="logo"></img></Link>
        <h1 className="auth__title">{props.isSignedIn ? "Рады видеть!" : "Добро пожаловать!"}</h1>
        <form className="auth__form">
          {!props.isSignedIn && <InputRow label="Имя" placeholder="Введите имя" type="text" />}
          <InputRow label="E-mail" placeholder="Введите e-mail" type="email" />
          <InputRow label="Пароль" placeholder="Введите пароль" value="wrongpassword" type="password" error="Что-то пошло не так..." />
          <button className="auth__button button">{!props.isSignedIn ? "Зарегистрироваться" : "Войти"}</button>
          {!props.isSignedIn && <Footer prefixText="Уже зарегистрированы?" linkText="Войти" linkHref="/signin" />}
          {props.isSignedIn && <Footer prefixText="Еще не зарегистрированы?" linkText="Регистрация" linkHref="/signup" />}
        </form>
      </div>
    </main>
  );
}

function InputRow(props) {
  return (
    <>
      <label className="auth__label">{props.label}</label>
      <input className={`auth__field ${props.error ? "auth__field_error" : ""}`} type={props.type} placeholder={props.placeholder} value={props.value} />
      {props.error && <span className="auth__error">{props.error}</span>}
    </>
  )
}

function Footer(props) {
  return <p className="auth__signin">{props.prefixText} <Link to={props.linkHref} className="auth__signin-link link">{props.linkText}</Link></p>;
}

export default Auth;