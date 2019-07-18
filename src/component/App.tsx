import * as React from "react";
import { useState } from "react";
import { WebsocketController } from "./websocket/WebsocketController";
import { Welcome } from "./welcome/Welcome";

export const App = () => {
  const [path] = useState<string>(window.location.pathname.slice(1));
  const [roomStatus, setRoomStatus] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const roomExists = () => {
    fetchAPI();

    return roomStatus === true ? true : false;
  };

  const fetchAPI = () => {
    fetch("http://localhost:2300/api/rooms/" + path, {
      method: "GET",
      mode: "cors"
    })
      .then(response => response.json())
      .then(
        result => {
          if (result.id === parseInt(path)) {
            setRoomStatus(true);
          }
        },
        error => {
          setError(true);
          setErrorMessage("room not found");
        }
      );
  };

  return (
    <>
      {path === "" && <Welcome />}
      {path !== "" && roomExists() && (
        <WebsocketController socketOpen={false} path={path} />
      )}
      {errorMessage}
    </>
  );
};
