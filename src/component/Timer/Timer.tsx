import * as React from "react";
import { CountDownButton } from "./button/CountDownButton";
import { CountDownTimer } from "./CountDownTimer";
import { CountUpTimer } from "./CountUpTimer";

interface Props {
  setCountDown: (newCountDown: boolean) => void;
  setCountUp: (newCountUp: boolean) => void;
  updateCountDown: (updateCountDown: boolean) => void;
  countDown: boolean;
  countUp: boolean;
  setFinishTime: (newFinishTime: number) => void;
}

export const Timer = (props: Props) => {
  const renderCountDownTimer = () => (
    <CountDownTimer setCountUp={props.setCountUp} />
  );

  const renderCountUpTimer = () => (
    <CountUpTimer setFinishTime={props.setFinishTime} />
  );

  const renderButton = () => (
    <CountDownButton
      updateCountDown={props.updateCountDown}
      setCountDown={props.setCountDown}
    />
  );

  return (
    <div>
      {!props.countDown && renderButton()}
      {!props.countUp && props.countDown && renderCountDownTimer()}
      {props.countUp && renderCountUpTimer()}
    </div>
  );
};
