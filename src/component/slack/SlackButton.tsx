import * as React from "react";
import sign_in_with_slack from "./images/sign_in_with_slack.png";
import "./css/SlackButton.css";

interface Props {
  handleEvent: (newEvent: any) => void;
}

export const SlackButton = (props: Props) => (
  <img
    className="button"
    src={sign_in_with_slack}
    alt="Slack"
    onClick={props.handleEvent}
  />
);
