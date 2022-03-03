import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import AddMoreButton from "./AddMoreButton/AddMoreButton";
import Like from "./Like/Like";
import DeleteButton from "./DeleteButton/DeleteButton";

function Movies(props) {
  return (
    <main className="main">
      <SearchForm></SearchForm>
      <MoviesCardList>
        <MoviesCard>{props.isSaved ? <DeleteButton /> : <Like />}</MoviesCard>
      </MoviesCardList>
      {!props.isSaved && < AddMoreButton />}
    </main>
  );
}

export default Movies;