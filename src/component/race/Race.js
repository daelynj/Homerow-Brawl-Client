import React from "react";
import octane from "./images/octane.png";

function Race(props) {
  const racePositions = 15;
  const wordsToAdvance = Math.round(props.wordsLength / racePositions);

  return (
    <div>
      <img
        style={{
          paddingLeft:
            Math.floor(props.currentWordIndex / wordsToAdvance) + "em"
        }}
        src={octane}
        alt="Octane"
      />
    </div>
  );
}

export default Race;
