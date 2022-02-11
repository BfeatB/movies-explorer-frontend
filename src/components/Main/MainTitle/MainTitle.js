import React from "react";

function MainTitle(props) {
  return (
      <div className="main__title-wrapper">
        <h2 className="main__title">{props.title}</h2>
      </div>
  );
}

export default MainTitle;