import * as React from "react";
import { useState } from "react";
import { SignOn } from "./welcome/SignOn";
import { SlackButton } from "./slack/SlackButton";
import * as slack from "./slack/api/handleSlackOAuth";

export const App = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const slackSignIn = () => {
    var entryURL = "http://" + window.location.host + window.location.pathname;

    window.location.href =
      "https://slack.com/oauth/authorize?scope=identity.basic&client_id=708370195111.695122331683&redirect_uri=" +
      entryURL +
      "&state=goodtimes";
  };

  return (
    <>
      {!authenticated && <SlackButton handleEvent={slackSignIn} />}
      {!authenticated &&
        slack.handleURL(authenticated, setAuthenticated, setName)}
      {authenticated && <SignOn name={name} />}
    </>
  );
};
