import * as React from "react";
import { useState, useEffect } from "react";
import { SignOn } from "./welcome/SignOn";
import { SlackButton } from "./slack/SlackButton";
import { Authenticate } from "./slack/Authenticate";
import * as slack from "./slack/api/handleSlackOAuth";
import "./css/Authentication.css";

export const Authentication = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    slack.handleURL(setAuthenticated);
  }, []);

  const slackSignIn = () => {
    var entryURL = "http://" + window.location.host + window.location.pathname;

    window.location.href =
      "https://slack.com/oauth/authorize?scope=identity.basic&client_id=708370195111.695122331683&redirect_uri=" +
      entryURL +
      "&state=goodtimes";
  };

  return (
    <div>
      <div className="title">Welcome to Homerow Brawl</div>
      <div className="button">
        {!sessionStorage.getItem("authenticated") &&
          window.location.href.length < 45 && (
            <SlackButton handleEvent={slackSignIn} />
          )}
      </div>
      {!sessionStorage.getItem("authenticated") &&
        window.location.href.length > 45 && <Authenticate />}
      {sessionStorage.getItem("authenticated") && <SignOn />}
    </div>
  );
};
