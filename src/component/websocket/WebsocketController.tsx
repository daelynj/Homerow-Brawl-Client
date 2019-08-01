import * as React from "react";
import { Game } from "../Game";
import Websocket from "react-websocket";
import { useState } from "react";

interface Props {
  socketOpen: boolean;
  path: string;
}

export const WebsocketController = (props: Props) => {
  const [socketOpen, setSocketOpen] = useState<boolean>(props.socketOpen);
  const [refWebSocket, setRefWebSocket] = useState<any>();
  const [raceState, setRaceState] = useState<any>(null);
  const [name, setName] = useState<any>(null);
  const [ID, setID] = useState<any>(null);
  const [countDown, setCountDown] = useState<boolean>(false);
  const [uuid] = useState<any>(sessionStorage.getItem("uuid"));

  const handleData = (data: any) => {
    let update = JSON.parse(data);

    if (update.hasOwnProperty("name") && Object.keys(update).length === 2) {
      setName(update.name);
      setID(update.id);
    } else if (update.hasOwnProperty("players")) {
      setRaceState(update);
    } else if (update.hasOwnProperty("countdown")) {
      setCountDown(update.countdown);
    }
  };

  const handleOpen = () => {
    setSocketOpen(true);
    updateJoin(uuid);
  };

  const handleClose = () => {
    setSocketOpen(false);
  };

  const sendMessage = (message: any) => {
    refWebSocket.sendMessage(JSON.stringify(message));
  };

  const updateJoin = (uuid: string) => {
    var joinUpdate = {
      uuid: uuid
    };

    sendMessage(joinUpdate);
  };

  const updatePosition = (position: number) => {
    var positionUpdate = {
      id: ID,
      uuid: uuid,
      name: name,
      position: position
    };

    sendMessage(positionUpdate);
  };

  const updateCountDown = (countDown: boolean) => {
    var countDownUpdate = {
      uuid: uuid,
      countdown: countDown
    };

    sendMessage(countDownUpdate);
  };

  return (
    <>
      <Websocket
        url={"ws://localhost:3000/".concat(props.path)}
        onMessage={handleData}
        onOpen={handleOpen}
        onClose={handleClose}
        reconnect={false}
        debug={true}
        ref={(Websocket: any) => {
          setRefWebSocket(Websocket);
        }}
      />
      {socketOpen && (
        <Game
          countDown={countDown}
          setCountDown={setCountDown}
          updatePosition={updatePosition}
          updateCountDown={updateCountDown}
          name={name}
          raceState={raceState}
          ID={ID}
        />
      )}
    </>
  );
};
