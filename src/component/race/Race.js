import React from "react";
import octane from "./images/octane.png";
import "./css/Race.css";

function Race(props) {
  const wordsToAdvance = Math.round(props.wordsLength / 15);

  function calculatePosition() {
    return "position" + Math.floor(props.currentWordIndex / wordsToAdvance);
  }
  return (
    <div className={calculatePosition()}>
      <img src={octane} alt="Octane" />
    </div>
  );
}

export default Race;
