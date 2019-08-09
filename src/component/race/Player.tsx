import * as React from "react";
import octane from "./images/octane.png";

interface Props {
  position: number;
  name: string;
}

export const Player = (props: Props) => (
  <div
    style={{
      paddingLeft: props.position + "%"
    }}
  >
    {props.name}
    <img src={octane} alt="Octane" />
  </div>
);
