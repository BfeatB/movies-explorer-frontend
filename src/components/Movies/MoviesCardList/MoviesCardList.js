import React from "react";

function MoviesCardList(props) {
  return (
    <section className="cards">
      {props.children}
    </section>
  );
}

export default MoviesCardList;