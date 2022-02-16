import React from "react";

function Like(props) {
  return (
    <main className="card__like">
      {props.children}
    </main>
  );
}

export default Like;