import * as React from "react";

interface Props {
  setCountDown: (newCountDown: any) => void;
  updateCountDown: (updateCountDown: any) => void;
}

export const CountDownButton = (props: Props) => {
  const handleEvent = () => {
    props.setCountDown(true);
    props.updateCountDown(true);
  };

  return (
    <div>
      <button onClick={handleEvent}>Start Game</button>
    </div>
  );
};
