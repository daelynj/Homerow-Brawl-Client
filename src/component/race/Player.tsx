import * as React from "react";
import octane from "./images/octane.png";

interface Props {
  position: number;
}

export const Player = (props: Props) => (
  <div>
    <img
      style={{
        paddingLeft: props.position + "%"
      }}
      src={octane}
      alt="Octane"
    />
  </div>
);
