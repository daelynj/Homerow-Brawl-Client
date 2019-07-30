import * as React from "react";

interface Props {
  handleEvent: (newEvent: any) => void;
}

export const CountDownButton = (props: Props) => (
  <div>
    <button onClick={props.handleEvent}>Start Game</button>
  </div>
);
