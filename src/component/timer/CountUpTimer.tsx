import * as React from "react";
import { useState, useEffect } from "react";

interface Props {
  setFinishTime: (newTime: number) => void;
}

export const CountUpTimer = (props: Props) => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let timerID = setTimeout(tick, 1000);

    return function cleanup() {
      props.setFinishTime(seconds);
    };
  });

  const tick = () => {
    setSeconds(seconds + 1);
  };

  return (
    <>
      <div>Go!</div>
      Timer: {seconds}
    </>
  );
};
