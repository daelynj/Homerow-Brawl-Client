import * as React from "react";
import octane from "./images/octane.png";

interface Props {
  wordsLength: number;
  currentWordIndex: number;
}

export const Race = (props: Props) => (
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
