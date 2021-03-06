import React from "react";

function SearchForm(props) {
  return (
    <div className="search">
      <form className="search__form">
        <div className="search__wrapper">
          <input className="search__field" type="search" placeholder="Фильм" required></input>
          <button className="search__button button" type="submit">Найти</button>
        </div>
        <label className="search__label">Короткометражки</label>
        <div class="search__toggle-wrapper">
          <input class="search__checkbox" type="checkbox" name="toggle" id="toggle"></input>
          <label for="toggle"></label>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;