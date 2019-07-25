import * as React from "react";

interface Props {
  handleEvent: (newEvent: any) => any;
}

export const WelcomeButton = (props: Props) => (
  <div>
    <button onClick={props.handleEvent}>Generate lobby</button>
  </div>
);
