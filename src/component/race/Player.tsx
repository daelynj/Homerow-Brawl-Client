import * as React from "react";
import octane from "./images/octane.png";

interface Props {
  position: number;
  name: string;
}

export const Player = (props: Props) => (
  <div
    style={{
      textAlign: "left",
      paddingLeft: props.position + "%"
    }}
  >
    <img src={octane} alt="Octane" />
    <div>{props.name}</div>
  </div>
);
