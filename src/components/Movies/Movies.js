import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import MoviesCard from "./MoviesCard/MoviesCard";
import AddButton from "./AddButton/AddButton";

function Movies(props) {
  return (
    <main className="main">
      <SearchForm></SearchForm>
      <MoviesCardList>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
        <MoviesCard></MoviesCard>
      </MoviesCardList>
      <AddButton></AddButton>
    </main>
    );
}

export default Movies;