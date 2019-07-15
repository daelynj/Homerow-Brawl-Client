import * as React from "react";
import { CountDownButton } from "./button/CountDownButton";
import { CountDownTimer } from "./CountDownTimer";

interface Props {
  setCountDown: (newCountDown: any) => void;
  setCountUp: (newCountUp: any) => void;
  updateCountDown: (updateCountDown: any) => void;
  countDown: boolean;
  countUp: boolean;
}

export const CountDown = (props: Props) => {
  const renderCountDownTimer = () => (
    <CountDownTimer setCountUp={props.setCountUp} />
  );

  const renderButton = () => (
    <CountDownButton
      updateCountDown={props.updateCountDown}
      setCountDown={props.setCountDown}
    />
  );

  const shouldRenderButton = () => (props.countDown ? false : true);

  return (
    <div>
      {shouldRenderButton() && renderButton()}
      {!props.countUp && !shouldRenderButton() && renderCountDownTimer()}
    </div>
  );
};
