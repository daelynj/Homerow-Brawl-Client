import React from "react";
import octane from "./images/octane.png";

function Race(props) {
  return (
    <div>
      <img
        style={{
          paddingLeft: (props.currentWordIndex / props.wordsLength) * 100 + "%"
        }}
        src={octane}
        alt="Octane"
      />
    </div>
  );
}

export default Race;
