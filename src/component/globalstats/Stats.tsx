import * as React from "react";
import { useState, useEffect } from "react";
import { fetchGlobalStatsAPI } from "./api/fetchGlobalStatsAPI";
import { Game } from "./Game";
import { Graph } from "./Graph";
import "./css/Stats.css";

export const Stats = () => {
  const [globalStats, setGlobalStats] = useState<any>(false);

  useEffect(() => {
    fetchGlobalStatsAPI(setGlobalStats);
  }, []);

  const displayGameHistory = () =>
    globalStats.games_played.map((game: any, index: number) => (
      <Game key={index} game={game} />
    ));

  const displayStats = () => {
    return (
      <>
        <div>{"average accuracy: " + globalStats.stats.average_accuracy}</div>
        <div>
          {"average letters typed: " + globalStats.stats.average_letters_typed}
        </div>
        <div>{"average mistakes: " + globalStats.stats.average_mistakes}</div>
        <div>
          {"average words typed: " + globalStats.stats.average_words_typed}
        </div>
        <div>{"average WPM: " + globalStats.stats.average_wpm}</div>
        <div>
          {"total letters typed: " + globalStats.stats.total_letters_typed}
        </div>
        <div>{"total mistakes: " + globalStats.stats.total_mistakes}</div>
        <div>{"total words typed: " + globalStats.stats.total_words_typed}</div>
      </>
    );
  };

  return (
    <>
      {globalStats && displayStats()}
      <div className="title">{globalStats && "Game History"}</div>
      <div className="history">{globalStats && displayGameHistory()}</div>
      <div className="graph">
        {globalStats && <Graph gamesPlayed={globalStats.games_played} />}
      </div>
    </>
  );
};
