import * as React from "react";
import { useState, useEffect } from "react";

interface Props {
  setCountUp: (newCountUp: any) => void;
}

export const CountDownTimer = (props: Props) => {
  const [seconds, setSeconds] = useState<number>(5);

  useEffect(() => {
    let timerID = setTimeout(tick, 1000);
  });

  const tick = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else {
      props.setCountUp(true);
    }
  };

  return <div>Timer: {seconds}</div>;
};
