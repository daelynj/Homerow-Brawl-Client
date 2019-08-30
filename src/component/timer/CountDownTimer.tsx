import * as React from "react";
import { useState, useEffect } from "react";
import "./css/CountDownTimer.css";

interface Props {
  setCountUp: (newCountUp: boolean) => void;
}

export const CountDownTimer = (props: Props) => {
  const [seconds, setSeconds] = useState<number>(5);

  useEffect(() => {
    let timerID = setTimeout(tick, 1000);
  });

  const tick = () => {
    if (seconds > 1) {
      setSeconds(seconds - 1);
    } else {
      props.setCountUp(true);
    }
  };

  return (
    <div className="countdown">
      <div>Get ready to type!</div>
      Timer: {seconds}
    </div>
  );
};
