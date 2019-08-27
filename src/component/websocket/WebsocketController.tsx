import * as React from "react";
import { Game } from "../Game";
import Websocket from "react-websocket";
import { useState, useEffect } from "react";
import "./css/WebsocketController.css";

interface Props {
  socketOpen: boolean;
  path: string;
}

export const WebsocketController = (props: Props) => {
  const [socketOpen, setSocketOpen] = useState<boolean>(props.socketOpen);
  const [refWebSocket, setRefWebSocket] = useState<any>();
  const [raceState, setRaceState] = useState<any>(null);
  const [statsState, setStatsState] = useState<any>(null);
  const [name, setName] = useState<any>(null);
  const [ID, setID] = useState<any>(null);
  const [countDown, setCountDown] = useState<boolean>(false);
  const [uuid] = useState<any>(sessionStorage.getItem("uuid"));
  const [gameInProgress, setGameInProgress] = useState<boolean>(false);
  const [makeRequests, setMakeRequests] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => makeRequests && requestState(), 1000);
    return () => clearInterval(interval);
  });

  const requestState = () => {
    var stateRequest = {
      type: "state_request",
      uuid: uuid
    };

    sendMessage(stateRequest);
  };

  const handleData = (data: any) => {
    let update = JSON.parse(data);

    if (update.type === "join") {
      setName(update.name);
      setID(update.id);
    } else if (update.type === "position") {
      setRaceState(update);
    } else if (update.type === "countdown") {
      setCountDown(update.countdown);
    } else if (update.type === "stats") {
      setStatsState(update);
      requestState();
      setMakeRequests(false);
    } else if (update.type === "game_started") {
      setGameInProgress(true);
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
      type: "join",
      uuid: uuid
    };

    sendMessage(joinUpdate);
  };

  const updatePosition = (position: number) => {
    var positionUpdate = {
      type: "position",
      id: ID,
      uuid: uuid,
      name: name,
      position: position
    };

    sendMessage(positionUpdate);
  };

  const updateCountDown = (countDown: boolean) => {
    var countDownUpdate = {
      type: "countdown",
      uuid: uuid,
      countdown: countDown
    };

    sendMessage(countDownUpdate);
  };

  const updateStats = (stats: any) => {
    var statsUpdate = {
      type: "stats",
      uuid: uuid,
      id: ID,
      name: name,
      words_typed: stats.wordsTyped,
      time: stats.time,
      mistakes: stats.mistakes,
      letters_typed: stats.lettersTyped
    };

    sendMessage(statsUpdate);
  };

  return (
    <>
      <Websocket
        url={"wss://homerow-brawl-server.herokuapp.com/".concat(props.path)}
        onMessage={handleData}
        onOpen={handleOpen}
        onClose={handleClose}
        reconnect={false}
        debug={true}
        ref={(Websocket: any) => {
          setRefWebSocket(Websocket);
        }}
      />
      <div className="busy">{gameInProgress && "Game in progress"}</div>
      {!gameInProgress && socketOpen && (
        <Game
          statsState={statsState}
          countDown={countDown}
          setCountDown={setCountDown}
          updatePosition={updatePosition}
          updateCountDown={updateCountDown}
          updateStats={updateStats}
          name={name}
          raceState={raceState}
          ID={ID}
          setMakeRequests={setMakeRequests}
        />
      )}
    </>
  );
};
