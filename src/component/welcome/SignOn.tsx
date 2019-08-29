import * as React from "react";
import { useState, useEffect } from "react";
import { fetchRoomAPI } from "./api/fetchRoomAPI";
import { WebsocketController } from "../websocket/WebsocketController";
import { Welcome } from "./Welcome";

export const SignOn = () => {
  const [path] = useState<string>(window.location.pathname.slice(1));
  const [roomStatus, setRoomStatus] = useState<boolean>(false);

  useEffect(() => {
    fetchRoomAPI(path, setRoomStatus);
  }, [path]);

  return (
    <>
      {path === "" && <Welcome />}
      {path !== "" && roomStatus && (
        <WebsocketController socketOpen={false} path={path} />
      )}
    </>
  );
};
