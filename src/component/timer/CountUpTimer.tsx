import * as React from "react";
import { useState, useEffect } from "react";
import "./css/CountUpTimer.css";

interface Props {
  setFinishTime: (newTime: number) => void;
  setMakeRequests: (newRequests: boolean) => void;
}

export const CountUpTimer = (props: Props) => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    props.setMakeRequests(true);
    let timerID = setTimeout(tick, 1000);

    return function cleanup() {
      props.setFinishTime(seconds);
    };
  });

  const tick = () => {
    setSeconds(seconds + 1);
  };

  return (
    <div className="countup">
      <div>Go!</div>
      Timer: {seconds}
    </div>
  );
};
