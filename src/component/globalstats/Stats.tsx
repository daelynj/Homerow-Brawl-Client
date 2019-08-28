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
    <table className="globalstats">
      <tr>
        <th>Average accuracy</th>
        <th>Average mistakes</th>
        <th>Average words</th>
        <th>Average letters</th>
        <th>Average WPM</th>
        <th>Total words</th>
        <th>Total letters</th>
        <th>Total mistakes</th>
      </tr>
      <tr>
        <td>{globalStats.stats.average_accuracy + "%"}</td>
        <td>{globalStats.stats.average_mistakes}</td>
        <td>{globalStats.stats.average_words_typed}</td>
        <td>{globalStats.stats.average_letters_typed}</td>
        <td>{globalStats.stats.average_wpm}</td>
        <td>{globalStats.stats.total_words_typed}</td>
        <td>{globalStats.stats.total_letters_typed}</td>
        <td>{globalStats.stats.total_mistakes}</td>
      </tr>
    </table>
  );

  return (
    <>
      <div className="title">{globalStats && "Game History"}</div>
      <div className="scrolltable">
        <table className="scrolltable__history">
          {globalStats && displayGameHistory()}
        </table>
      </div>
      {globalStats && displayStats()}
      <div className="graph">
        {globalStats && <Graph gamesPlayed={globalStats.games_played} />}
      </div>
    </>
  );
};
