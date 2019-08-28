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

  const displayStats = () => (
    <>
      <span className="individualstats">
        {"average accuracy: " + globalStats.stats.average_accuracy + "%"}
      </span>
      <span className="individualstats">
        {"average letters typed: " + globalStats.stats.average_letters_typed}
      </span>
      <span className="individualstats">
        {"average mistakes: " + globalStats.stats.average_mistakes}
      </span>
      <span className="individualstats">
        {"average words typed: " + globalStats.stats.average_words_typed}
      </span>
      <span className="individualstats">
        {"average WPM: " + globalStats.stats.average_wpm}
      </span>
      <span className="individualstats">
        {"total letters typed: " + globalStats.stats.total_letters_typed}
      </span>
      <span className="individualstats">
        {"total mistakes: " + globalStats.stats.total_mistakes}
      </span>
      <span className="individualstats">
        {"total words typed: " + globalStats.stats.total_words_typed}
      </span>
    </>
  );

  return (
    <>
      <div className="title">{globalStats && "Game History"}</div>
      <div className="scrolltable">
        <table className="scrolltable__history">
          {globalStats && displayGameHistory()}
        </table>
      </div>
      <div className="globalstats">{globalStats && displayStats()}</div>
      <div className="graph">
        {globalStats && <Graph gamesPlayed={globalStats.games_played} />}
      </div>
    </>
  );
};
