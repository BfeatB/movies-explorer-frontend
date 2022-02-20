import React from "react";


function Profile(props) {
  return (
    <main className="profile">
      <h1 className="profile__title">{`Привет, ${props.userName}!`}</h1>
      <form className="profile__form">
        <div className="profile__wrapper">
          <label className="profile__label">Имя
          </label>
          <input className="profile__field" type="text" placeholder="Введите имя" value={props.userName} disabled></input>
        </div>
        <div className="profile__wrapper">
          <label className="profile__label">E-mail
          </label>
          <input className="profile__field" type="email" placeholder="Введите e-mail" value={props.email} disabled></input>
        </div>
      </form>
      <div className="profile__bottom-nav">
        <button className="profile__edit">Редактировать</button>
        <a className="profile__sign-out">Выйти из аккаунта</a>
      </div>
    </main>
  );
}

export default Profile;