import * as React from "react";
import octane from "./images/octane.png";

interface Props {
  position: number;
  name: string;
}

export const Player = (props: Props) => (
  <div>
    {props.name}
    <img
      style={{
        paddingLeft: props.position + "%"
      }}
      src={octane}
      alt="Octane"
    />
  </div>
);
