import React from "react";
import logo from "../../images/logo.svg";


function Auth(props) {
  return (
    <main className="auth">
      <div className="auth__wrapper">
        <a className="auth__logo-link link" href="/"><img src={logo} alt="logo"></img></a>
        <h1 className="auth__title">{props.isSignedIn ? "Рады видеть!" : "Добро пожаловать!"}</h1>
        <form className="auth__form">
            {!props.isSignedIn && <InputRow label="Имя" placeholder="Введите имя" type="text" />}
            <InputRow label="E-mail" placeholder="Введите e-mail" type="email" />
            <InputRow label="Пароль" placeholder="Введите пароль" type="password" />
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
      <input className="auth__field" type={props.type} placeholder={props.placeholder} />
    </>
  )
}

function Footer(props) {
  return <p className="auth__signin">{props.prefixText} <a href={props.linkHref} className="auth__signin-link link">{props.linkText}</a></p>;
}

export default Auth;