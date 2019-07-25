import * as React from "react";
import { useState } from "react";
import { fetchRoomAPI } from "./api/fetchRoomAPI";
import { WebsocketController } from "./websocket/WebsocketController";
import { Welcome } from "./welcome/Welcome";

export const App = () => {
  const [path] = useState<string>(window.location.pathname.slice(1));
  const [roomStatus, setRoomStatus] = useState<boolean>(false);

  const roomExists = () => {
    fetchRoomAPI(path, setRoomStatus);

    return roomStatus === true ? true : false;
  };

  return (
    <>
      {path === "" && <Welcome />}
      {path !== "" && roomExists() && (
        <WebsocketController socketOpen={false} path={path} />
      )}
    </>
  );
};
