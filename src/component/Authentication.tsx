import * as React from "react";
import { useState } from "react";
import { SignOn } from "./welcome/SignOn";
import { SlackButton } from "./slack/SlackButton";
import { Authenticate } from "./slack/Authenticate";
import * as slack from "./slack/api/handleSlackOAuth";
import "./css/Authentication.css";

export const Authentication = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const slackSignIn = () => {
    var entryURL = "http://" + window.location.host + window.location.pathname;

    window.location.href =
      "https://slack.com/oauth/authorize?scope=identity.basic&client_id=708370195111.695122331683&redirect_uri=" +
      entryURL +
      "&state=goodtimes";
  };

  return (
    <div className="authentication">
      <div className="authentication__title">Welcome to Homerow Brawl</div>
      <div className="authentication__bottom">
        <div className="authentication__bottom--button">
          {!sessionStorage.getItem("authenticated") &&
            window.location.href.length < 45 && (
              <SlackButton handleEvent={slackSignIn} />
            )}
        </div>
        {!sessionStorage.getItem("authenticated") &&
          slack.handleURL(setAuthenticated)}
        {!sessionStorage.getItem("authenticated") &&
          window.location.href.length > 45 && <Authenticate />}
        {sessionStorage.getItem("authenticated") && <SignOn />}
      </div>
    </div>
  );
};