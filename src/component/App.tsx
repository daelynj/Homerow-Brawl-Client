import * as React from "react";
import { useState } from "react";
import { SignOn } from "./welcome/SignOn";
import { SlackButton } from "./slack/SlackButton";
import * as slack from "./slack/api/handleSlackOAuth";

export const App = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const slackSignIn = () => {
    var entryURL = "http://" + window.location.host + window.location.pathname;

    window.location.href =
      "https://slack.com/oauth/authorize?scope=identity.basic&client_id=708370195111.695122331683&redirect_uri=" +
      entryURL +
      "&state=goodtimes";
  };

  return (
    <>
      {!sessionStorage.getItem("authenticated") && (
        <SlackButton handleEvent={slackSignIn} />
      )}
      {!sessionStorage.getItem("authenticated") &&
        slack.handleURL(setAuthenticated)}
      {sessionStorage.getItem("authenticated") && <SignOn />}
    </>
  );
};
